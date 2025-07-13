import mongoose from "mongoose";

const subscribeUserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    subscribeAt:{
        type:Date,
        default:Date.now
    }
})

const subscribeUserModel=mongoose.models.subscribeUser || mongoose.model('subscribeUser',subscribeUserSchema);

export default subscribeUserModel