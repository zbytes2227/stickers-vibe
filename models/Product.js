const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    tags: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Products", ProductSchema)

