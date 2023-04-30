import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let newProducts = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
            await newProducts.save();
            res.status(200).json({ Success: "PRODUCT UPDATED" })
        }
    } else {
        res.status(400).json({ error: "METHOD NOT ALLOWED" })
    }
}

export default connectDb(handler);

