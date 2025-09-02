import express from 'express'
import UserModel from '../Models/User.js';

export const GetUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users)
    } catch (error) {
        res.send(error);
    }
}