import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {

            let newProducts = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                tags: req.body[i].tags,
                price: req.body[i].price,
                stock: req.body[i].stock,
            });
            await newProducts.save();
        }
        res.status(200).json({ Success: "Stickers added to database" })
    } else {
        res.status(400).json({ error: "METHOD NOT ALLOWED" })
    }
}

export default connectDb(handler);




