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
import user from "./model/user.js";

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

app.get("/api/blog", async (_req, res) => {
  const blogData = await shopify.api.rest.Blog.all({
    session: res.locals.shopify.session,
  });
  const blogId = blogData.data.map(element => element.id);
  // blogId.map(element => {
  //   const articles = shopify.api.rest.Article.all({
  //     session: res.locals.shopify.session,
  //     blog_id: element
  //   });
  // })
  const articleData = await shopify.api.rest.Article.all({
    session: res.locals.shopify.session,

  });
  res.status(200).send(blogData);
});

app.get("/api/blog", async (_req, res) => {
  const blogData = await shopify.api.rest.Blog.all({
    session: res.locals.shopify.session,
  });
  const blogId = blogData.data.map(element => element.id);
  // blogId.map(element => {
  //   const articles = shopify.api.rest.Article.all({
  //     session: res.locals.shopify.session,
  //     blog_id: element
  //   });
  // })
  const articleData = await shopify.api.rest.Article.all({
    session: res.locals.shopify.session,

  });
  res.status(200).send(blogData);
});

app.get("/setting", async (_req, res) => {
  const blogData = await shopify.api.rest.Blog.all({
    session: res.locals.shopify.session,
  });
  const blogId = blogData.data.map(element => element.id);
  // blogId.map(element => {
  //   const articles = shopify.api.rest.Article.all({
  //     session: res.locals.shopify.session,
  //     blog_id: element
  //   });
  // })
  const articleData = await shopify.api.rest.Article.all({
    session: res.locals.shopify.session,

  });
  res.status(200).send(blogData);
});

app.post("/setting/create", async (req, res) => {
  if (!req.body){
    res.status(400).send({ message : "Setting can not empty"});
    return;
  }
  // const settingData = {
  //   title: req.body.title,
  //   identation: req.body.identation,
  //   section: req.body.section,
  //   h1: req.body.checked1,
  //   h2: req.body.checked2,
  //   h3: req.body.checked3,
  //   h4: req.body.checked4,
  // }

  const user = new User({
    toc: {
      title: req.body.title,
      identation: req.body.identation,
      section: req.body.section,
      h1: req.body.checked1,
      h2: req.body.checked2,
      h3: req.body.checked3,
      h4: req.body.checked4,
    },
    shop_plan: 'free'
  })
  
  user
    .save()
    .then(() => res.json('User setting added!'))
    .catch((error) => {console.log(error)});

});


//UPDATE
app.put("/setting/update", async (req, res) => {
  if (!req.body){
    res.status(400).send({ message : "Setting can not empty"});
    return;
  }
  // const settingData = {
  //   title: req.body.title,
  //   identation: req.body.identation,
  //   section: req.body.section,
  //   h1: req.body.checked1,
  //   h2: req.body.checked2,
  //   h3: req.body.checked3,
  //   h4: req.body.checked4,
  // }

  const user = new User({
    toc: {
      title: req.body.title,
      identation: req.body.identation,
      section: req.body.section,
      h1: req.body.checked1,
      h2: req.body.checked2,
      h3: req.body.checked3,
      h4: req.body.checked4,
    },
    shop_plan: 'free'
  })
  
  user
    .save()
    .then(() => res.json('User setting added!'))
    .catch((error) => {console.log(error)});

});
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

