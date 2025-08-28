import express from 'express'
import { createNote, updateNote } from '../Controllers/UserControllers.js';

const UserRoutes = express.Router();

UserRoutes.post('/create', createNote)
UserRoutes.post('/update/:id', updateNote)

export default UserRoutes;