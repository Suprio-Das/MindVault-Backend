import express from 'express'
import { register } from '../Controllers/AuthControllers.js';

const AuthRoutes = express.Router();

AuthRoutes.post('/register', register)

export default AuthRoutes;