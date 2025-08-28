import jwt from 'jsonwebtoken'
import UserModel from '../Models/User.js';
import NoteModel from '../Models/Note.js';

export const createNote = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            res.status(400).json({ success: false, message: 'All Fields are required' })
        }

        const token = await req.cookies.token;
        console.log(token)

        if (!token) {
            res.status(401).json({ success: false, message: 'Unauthorized user.' })
        }

        const decoded_token = jwt.verify(token, process.env.JWT_Secret)

        const user = await UserModel.findById(decoded_token.userId);

        if (!user) {
            res.status(401).json({ success: false, message: 'Unauthorized. Operation closed' })
        }

        const newNote = new NoteModel({
            name, description, userId: user._id
        })

        console.log(name, description)

        await newNote.save();

        res.status(200).json({ success: true, message: 'New note created.', newNote })

    } catch (error) {
        res.json({ success: false, message: error });
    }
}

export const updateNote = async (req, res) => {
    try {
        const note = req.params.id;
        console.log(note);
    } catch (error) {
        res.status(501).json({ success: false, message: 'Internal Server Error' })
    }
}