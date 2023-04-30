import argon2 from "argon2";
import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {

    if (req.method == 'POST') {
        console.log(req.body);
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                if (await argon2.verify(user.password, req.body.password)) {
                    const token = jwt.sign({ _id: user._id }, 'secrket-key', { expiresIn: "1h" });
                    res.status(200).json({ success: true, msg: "Login Successful", token: token, name: user.name, email: user.email });
                } else {
                    res.status(400).json({ success: false, msg: "Credentials Invalid1" });
                }
            } else {
                res.status(400).json({ success: false, msg: "Credentials Invalid2" });
            }
        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, msg: "Credentials Invalid3" });
        }
    } else {
        res.status(400).json({ error: "METHOD NOT ALLOWED" });
    }
}

export default connectDb(handler);
