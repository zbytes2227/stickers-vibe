import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import argon2 from "argon2";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        const hashedPassword = await argon2.hash(req.body.password);
        try {
            let newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            });
            await newUser.save();
            res.status(200).json({ success: true, msg: "User added to database" })
        } catch (error) {
            res.status(400).json({ success: false, msg: "Please Check Your Details !" })
        }
       
    } else {
        res.status(400).json({ error: "METHOD NOT ALLOWED" })
    }
}

export default connectDb(handler);
