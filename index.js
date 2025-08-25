import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import DbConn from './utils/db.js';
dotenv.config();

// Declaring Port
const PORT = process.env.PORT || 5000;

// Creating Express App
const app = express();

// Express and CORS Middlewares
app.use(express.json())
app.use(cors())

// Database Connection Function
DbConn();

// Testing Route
app.get('/', (req, res) => {
    res.send('Hello, MindVault is reading your mind...')
})

// Listening to the PORT
app.listen(PORT);