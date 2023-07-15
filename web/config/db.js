import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://0.0.0.0:27017/tableofcontent')
        console.log(`Connected to mongodb database ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in mongodb ${error}`)
    }
}

export default connectDB