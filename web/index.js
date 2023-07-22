// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";

import connectDB from "./config/db.js";

import User from "./model/user.js"

const PORT = parseInt(
  process.env.BACKEND_PORT || process.env.PORT || "3000",
  10
);

// Connect DB
connectDB()

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json());

app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});
//--------------------------------------------------------------

//GET ARTICLE
app.get("/api/article", async (_req, res) => {
  console.log('starting...');
  var index = 0;
  const blogData = await shopify.api.rest.Blog.all({
    session: res.locals.shopify.session,
  });
  const articleList = [];
  const blogIds = blogData.data.map(element => element.id);
  // blogIds.forEach( async (blogId) => {
  //   const articles = await shopify.api.rest.Article.all({
  //     session: res.locals.shopify.session,
  //     blog_id: blogId
  //   });
  //   articles.data.forEach(article => {
  //     return 
  //   });
  // });
  const articleData = await shopify.api.rest.Article.all({
    session: res.locals.shopify.session,
    blog_id: blogIds[0]
  });
  const articles = articleData.data.map(element => {
    return {
      id: element.id,
      name: element.title,
      handle: element.handle,
      status: 'On'
    }
  })
  res.status(200).send(articles);
});

//SETTING || ADD HANDLE
app.put("/setting/handle/update", async (req, res) => {
  const { domain, article_handles } = req.body;
  await User.findOneAndUpdate({ domain }, {
    $set: {'toc.article_handles': article_handles}
}, { upsert: true, new: true })
    .then((data) => console.log(data))
  return res.status(200).json({
    message: 'Updated successfuly, Refreshing...',
    error: 0
})
});

// SHOP || GET || STEP 1 SCREEN
app.get("/api/shop", async (_req, res) => {
  const shopData = await shopify.api.rest.Shop.all({
    session: res.locals.shopify.session,
  });
  const shop = {
    shopid: shopData.data[0].id,
    email: shopData.data[0].email,
    name: shopData.data[0].shop_owner,
    store_name: shopData.data[0].name,
    shop_plan: shopData.data[0].plan_name,
    domain: shopData.data[0].domain
  }
  // console.log(shop);
  res.status(200).send(shop);
});

//CREATE || SETTING
app.post("/setting/create", async (req, res) => {
  if (!req.body){
    res.status(400).send({ message : "Setting can not empty"});
    return;
  }

  const user = new User({
    domain: req.body.domain,
    toc: {
      title: req.body.title,
      indentation: req.body.indentation,
      section: req.body.section,
      h1: req.body.checked1,
      h2: req.body.checked2,
      h3: req.body.checked3,
      h4: req.body.checked4
    },
    shopinfo: {
      shopid: req.body.shopid,
      email: req.body.email,
      name: req.body.name,
      store_name: req.body.store_name,
      shop_plan: req.body.shop_plan,
    },
    shop_plan: 'free'
  })
  
  user
    .save()
    .then(() => res.json('User setting added!'))
    .catch((error) => {console.log(error)});

});

// SETTING || GET
app.get("/setting/get", async (req, res) => {
  User.findOne({ domain: req.query.domain })
    .then((value) => {
      res.status(200).send(value);
    })
    .catch((e) => {
      console.log(e)
    })  
});


// SETTING || GET
app.get("/setting/get/themeapp", async (req, res) => {
  const shopDomain = "wind-shop-4530.myshopify.com"
  User.findOne({ domain: shopDomain })
    .then((value) => {
      res.status(200).send(value);
    })
    .catch((e) => {
      console.log(e)
    })  
});

// GET DOMAIN
app.get("/api/domain", async (_req, res) => {
  const shopData = await shopify.api.rest.Shop.all({
    session: res.locals.shopify.session,
  });
 res.status(200).send(shopData.data[0]);
    
});



//UPDATE
app.put("/setting/update", async (req, res) => {
  const { title, indentation, section, checked1, checked2, checked3, checked4, domain } = req.body;
  await User.findOneAndUpdate({ domain }, {
    toc: {
      title: title,
      h1: checked1,
      h2: checked2,
      h3: checked3,
      h4: checked4,
      indentation: indentation,
      section: section
    }
}, { upsert: true, new: true })
    .then((data) => console.log(data))
return res.status(200).json({
    message: 'Updated successfuly, Refreshing...',
    error: 0
})
});

// app.get("/api/article/html", async (_req, res) => {
//   const blogData = await shopify.api.rest.Blog.all({
//     session: res.locals.shopify.session,
//   });
//     const articleData = await shopify.api.rest.Article.all({
//     session: res.locals.shopify.session,
//     blog_id: blogData.data[0].id,
//   });
//   console.log(articleData.data[1].body_html)
// })


//-----------------------------------------------------------
app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.use(shopify.cspHeaders());
app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});

// app.listen(PORT);
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`),
);

