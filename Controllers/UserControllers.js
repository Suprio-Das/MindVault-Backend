import jwt from 'jsonwebtoken'
import UserModel from '../Models/User';

export const createNote = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ success: false, message: 'All Fields are required' })
        }

        const token = res.cookies.token;

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized user.' })
        }

        const decoded_token = jwt.verify(token, process.env.JWT_Secret)

        const user = await UserModel.findById(decoded_token.userId);


    } catch (error) {
        res.json({ success: false, message: error });
    }
}