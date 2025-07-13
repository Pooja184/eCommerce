import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';


const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//route for user login
const loginUser= async (req,res)=>{
    try {
        const {email,password} = req.body;

        const user= await userModel.findOne({email});

        if (!user) {
            return res.json({success:false,message:"User doesn't exists"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (isMatch) {
            const token = createToken(user._id);

            res.json({success:true,token});
        }else{
            res.json({success:false,message:"Invalid credentials"});
        }
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

//Route for user register0
const registerUser = async(req,res)=>{
    // res.json({msg:"Register api working"});
    try {
        // Destructure name, email, and password from request body
        const {name,email,password} = req.body;


        //checking user already exist or not
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success:false,message:"User already exists"});
        }

        //validationg email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email"});
        }

        // 3. Validate password strength
        if (password.length < 8) {
            return res.json({success:false,message:"Please enter a strong password"});
        }

        //hasing user password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt); 

        const newUser= new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user= await newUser.save();

        const token=createToken(user._id);

        res.json({
            success:true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

//Route for admin login
const adminLogin =async(req,res)=>{
    try {
        const {email,password} = req.body;
        // Compare provided credentials with environment-defined admin credentials
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            // If credentials match, generate a JWT token for session/authentication
            // Note: Including both email and password in the token payload is not recommended for production.
            // Ideally, include a unique identifier (like "admin" or user ID) for security.
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            // Send success response with the generated token
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid creadentials"})
        }
    } catch (error) {
         console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}


export {loginUser,registerUser,adminLogin}