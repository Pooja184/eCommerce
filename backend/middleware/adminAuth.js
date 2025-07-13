import jwt from 'jsonwebtoken';

// Middleware to verify if the admin is authenticated
const adminAuth=async(req,res,next)=>{
    try {
        // Extract the token from the request headers
        const {token} = req.headers;

        // If no token is provided, block access
        if(!token){
            return res.json({success:false,message:"Not Authorized Login Again"});
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);  // Verify and decode the token using the secret key
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized Login Again"});
        }
        next(); // If token is valid and matches admin credentials, proceed to the next middleware or route
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export default adminAuth