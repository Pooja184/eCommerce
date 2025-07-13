import subscribeUserModel from "../models/subscribe.model.js";
import validaor from 'validator';

const subscribeUser=async(req,res)=>{
       try {
         const {email}= req.body;
 
         if(!validaor.isEmail(email)){
             return res.json({success:false,message:"Please enter a valid email"})
         } 
 
         const exist=await subscribeUserModel.findOne({email});
         if(exist){
             return res.json({success:false,message:"Email already exist"});
         }
 
         const newSubscriber= new subscribeUserModel({
             email
         })
 
         const savedSubscriber=await newSubscriber.save();
         console.log(savedSubscriber);
 
         res.json({
             success:true,
             subscriber: savedSubscriber
         })
       } catch (error) {
            console.log(error);
            res.json({
                success:false,
                message:error.message
            })
       }
}

export {subscribeUser};