import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: true })

const NoteModel = mongoose.model("notes", NoteSchema);
export default NoteModel;