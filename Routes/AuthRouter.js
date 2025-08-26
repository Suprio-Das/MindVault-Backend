import express from 'express'
import { register } from '../Controllers/AuthControllers.js';

const AuthRoutes = express.Router();

AuthRoutes.post('/register', register)
AuthRoutes.post('/login', (req, res) => {
    console.log("Login is working");
})

export default AuthRoutes;