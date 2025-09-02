import express from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../Models/User.js';

export const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized user. Delete not proceed.' })
        }
        const decoded_token = jwt.verify(token, process.env.JWT_Secret);

        const user = await UserModel.findById(decoded_token.userId);
        if (!user) {
            res.status(400).json({ message: 'User not found' });
        }
    } catch (error) {
        res.send(error);
    }
}