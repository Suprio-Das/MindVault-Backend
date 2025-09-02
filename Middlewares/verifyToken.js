import express from 'express';
import jwt from 'jsonwebtoken';

export const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized user. Delete not proceed.' })
        }
    } catch (error) {
        res.send(error);
    }
}