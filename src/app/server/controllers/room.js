import PostMessage from "../models/PostMessage.js"
// import mongoose from 'mongoose';

export const getRoom = async (req, res) => {
    try {
        const Room = await PostMessage.find().sort({_id: -1});
        res.status(200).json(Room);
        }
    
    catch (error) {
        res.status(404).json({message: error.message})
    }
} 