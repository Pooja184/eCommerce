import express from 'express';
import { exchangeItem } from '../controllers/exchange.controller.js';
import authUser from '../middleware/auth.js';



const exchangeRouter=express.Router();

exchangeRouter.post('/exchangeProduct', authUser,exchangeItem);


export default exchangeRouter;