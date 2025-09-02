import express from 'express'
import { isAdmin } from '../Middlewares/verifyToken.js';
import { GetUsers } from '../Controllers/AdminControllers.js';

const AdminRoutes = express.Router();

AdminRoutes.get('/users', isAdmin, GetUsers);

export default AdminRoutes;