import express from 'express'
import { createNote, deleteNote, updateNote } from '../Controllers/UserControllers.js';

const UserRoutes = express.Router();

UserRoutes.post('/create', createNote)
UserRoutes.post('/update/:id', updateNote)
UserRoutes.delete('/delete/:id', deleteNote);

export default UserRoutes;