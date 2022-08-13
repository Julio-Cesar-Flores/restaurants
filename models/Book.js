import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    author: String,
    edition: String,
    pages: Number,
    isbn: String,
    publishDate: Date,
})

export default mongoose.model('Book', schema)