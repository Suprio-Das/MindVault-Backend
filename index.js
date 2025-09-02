import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import DbConn from './utils/db.js';
import AuthRoutes from './Routes/AuthRouter.js';
import cookieParser from 'cookie-parser';
import UserRoutes from './Routes/UserRouter.js';
import AdminRoutes from './Routes/AdminRouter.js';
dotenv.config();

// Declaring Port
const PORT = process.env.PORT || 5000;

// Creating Express App
const app = express();

// Express and CORS Middlewares
app.use(express.json());
app.use(cors())
app.use(cookieParser());

// Database Connection Function
DbConn();

// Routes
app.use('/api/auth', AuthRoutes);
app.use('/api/user', UserRoutes);
app.use('/api/admin', AdminRoutes);
// Testing Route
app.get('/', (req, res) => {
    res.send('Hello, MindVault is reading your mind...')
})

// Listening to the PORT
app.listen(PORT);