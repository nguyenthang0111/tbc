import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    user_id:{
        type: Number,
        required: true
    },
    shopinfo:{
        shop_id: { type: Number, required: true },
        email: { type: String, required: true },
        name: { type: String, required: true },
        shop_plan: { type: String, required: true }
    },
    toc:{
        title: { type: String, required: true },
        h1: { type: Boolean, required: true },
        h2: { type: Boolean, required: true },
        h3: { type: Boolean, required: true },
        h4: { type: Boolean, required: true },
        identation: { type: String, required: true },
        section: { type: String, required: true },
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
