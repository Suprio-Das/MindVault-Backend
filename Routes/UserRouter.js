import express from 'express'
import { createNote, updateNote } from '../Controllers/UserControllers.js';

const UserRoutes = express.Router();

UserRoutes.post('/create', createNote)
UserRoutes.post('/updateNote/:id', updateNote)

export default UserRoutes;