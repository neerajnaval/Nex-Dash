import express from 'express';

import  { getRoom }  from "../controllers/room.js";
const router = express.Router();

router.get('/', getRoom); 

export default router; 