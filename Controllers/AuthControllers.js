import UserModel from "../Models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All Fields are required" });
        }

        const existUser = await UserModel.findOne({ email });
        if (existUser) {
            return res.status(400).json({ success: false, message: "User already exist" })
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new UserModel({
            name, email, password: hashedPassword
        })

        await newUser.save();

        res.status(200).json({ success: true, message: 'User Registered' })
    } catch (error) {
        res.send(error.message)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ success: false, message: "User not found" })
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ success: false, message: "Password is invalid" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_Secret)

    res.cookie('token', token, {
        maxAge: 86400000,
        secure: false,
        httpOnly: true
    })

    res.status(200).json({ success: true, message: "User logged-in Successfully", user })
}