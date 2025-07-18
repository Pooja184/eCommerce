import express from 'express';
import 'dotenv/config';              // Loads environment variables from .env
import cors from 'cors';             // Enables Cross-Origin Resource Sharing
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';
import subscribeUserRouter from './routes/subscribeUser.route.js';
import exchangeRouter from './routes/exchange.route.js';

//App config
const app=express();                // Initialize the Express application
const port = process.env.PORT || 4000;  
connectDB();                        // Connect to MongoDB database
connectCloudinary()                 // Configure Cloudinary for media handling

//Middlewares
app.use(express.json());            // Parse incoming JSON requests
const allowedOrigins = ['https://ecommerce-frontend-ashy-kappa.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);
app.use('/api/subscribe',subscribeUserRouter);
app.use('/api/exchange',exchangeRouter);



app.get('/',(req,res)=>{
    res.send("API Working")
})

//start the server
app.listen(port,()=>console.log(`Server started on PORT ${port}`));