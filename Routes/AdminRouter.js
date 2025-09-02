import express from 'express'
import { isAdmin } from '../Middlewares/verifyToken';
import { GetUsers } from '../Controllers/AdminControllers';

const AdminRoutes = express.Router();

AdminRoutes.get('/users', isAdmin, GetUsers);

export default AdminRoutes;