import express from 'express'
import { createNote } from '../Controllers/UserControllers.js';

const UserRoutes = express.Router();

UserRoutes.post('/create', createNote)

export default UserRoutes;