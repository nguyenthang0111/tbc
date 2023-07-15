import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    user_id:{
        type: Number,
        // required: true
    },
    shopinfo:{
        shop_id: { type: Number },
        email: { type: String },
        name: { type: String },
        shop_plan: { type: String }
    },
    toc:{
        title: { type: String },
        h1: { type: Boolean },
        h2: { type: Boolean },
        h3: { type: Boolean },
        h4: { type: Boolean },
        identation: { type: String },
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
