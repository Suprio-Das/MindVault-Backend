import express from 'express'
import { createNote } from '../Controllers/UserControllers';

const UserRoutes = express.Router();

UserRoutes.post('/create', createNote)

export default UserRoutes;