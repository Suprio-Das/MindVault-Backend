import express from 'express'

export const GetUsers = async (req, res) => {
    try {
        console.log('Users')
    } catch (error) {
        res.send(error);
    }
}