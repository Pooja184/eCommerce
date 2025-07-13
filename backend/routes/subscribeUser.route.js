import express from 'express';
import { subscribeUser } from '../controllers/subscribeUser.controller.js';


const subscribeUserRouter=express.Router();

subscribeUserRouter.post('/subscribeuser',subscribeUser);


export default subscribeUserRouter;