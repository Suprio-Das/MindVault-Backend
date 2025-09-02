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
            res.status(404).json({ message: 'User not found' });
        }
        if (user.role !== 'admin') {
            res.status(401).json({ success: false, message: 'Unauthorized access denied.' })
        }

        req.user = user;
        next();
    } catch (error) {
        res.send(error);
    }
}