import userModel from "../models/user.model.js";


//add products to user cart
const addToCart=async(req,res)=>{
    try {
        const {itemId,size} =req.body;
        const userId = req.userId;

        const userData= await userModel.findById(userId);
        let cartData= await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData});

        res.json({success:true,message:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}



//update user cart
const updateCart=async(req,res)=>{
    try {
        const {itemId,size,quantity}=req.body;
        const userId = req.userId;

        const userData= await userModel.findById(userId);
        let cartData= await userData.cartData;

        cartData[itemId][size]=quantity;

        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true,message:"Cart updated"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}



//get user cart data
const getUserCart=async(req,res)=>{
    try {
        // const {userId} = req.body;
        const userId = req.userId;
        const userData= await userModel.findById(userId);
        let cartData= await userData.cartData;

        res.json({success:true,cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}


export {addToCart,updateCart,getUserCart}