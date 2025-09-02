import express from 'express'

export const GetUsers = async (req, res) => {
    try {
        console.log(req.body.userId)
    } catch (error) {
        res.send(error);
    }
}