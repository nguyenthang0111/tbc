import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    domain:{
        type: String,
        // required: true
    },
    shopinfo:{
        shopid: { type: Number },
        email: { type: String },
        name: { type: String },
        store_name: { type: String},
        shop_plan: { type: String }
    },
    toc:{
        title: { type: String },
        h1: { type: Boolean },
        h2: { type: Boolean },
        h3: { type: Boolean },
        h4: { type: Boolean },
        indentation: { type: String },
        section: { type: String },
        article_handles: [{
            type: String
        }]
    },
    shop_plan: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('User', userScheme)
