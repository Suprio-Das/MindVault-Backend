import express from 'express';
import jwt from 'jsonwebtoken';

export const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized user. Delete not proceed.' })
        }
        const decoded_token = jwt.verify(token, process.env.JWT_Secret);
        console.log(decoded_token);
    } catch (error) {
        res.send(error);
    }
}