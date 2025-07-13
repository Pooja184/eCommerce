
import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/product.model.js'


//function for add product
const addProduct= async (req,res)=>{
    try {
        const {name,description,price,category,subCategory,sizes,bestSeller} =req.body;

        // Getting the uploaded images from the request (if they exist)
        // Each image is stored as an array, so we take the first image using [0]
        const image1 = req.files.image1 &&  req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 &&  req.files.image4[0]

        // This line creates a new array called images that only includes the image files that were actually uploaded.(Collect all uploaded image files into a single array (exclude undefined))
        const images=[image1,image2,image3,image4].filter((item)=>item !== undefined);

        // Upload each image to Cloudinary and get their secure URLs
        let imagesUrl= await Promise.all(
            images.map(async (item)=>{
                let result  = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url;  // Return only the secure URL
            })
        )

        // console.log(name,description,price,category,subCategory,sizes,bestSeller);
        // console.log(imagesUrl);

        // Prepare the final product data object
        const productData={
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestSeller: bestSeller === "true" ? true : false,
            sizes : JSON.parse(sizes),
            image : imagesUrl,
            date: Date.now()
        }

        // console.log(productData);

        // Create and save the new product document in MongoDB
        const product = new productModel(productData);
        await product.save()

        // Send success response
        res.json({success:true,message:"Product Added"});

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//function for list product
const listProduct= async (req,res)=>{
    try {
        // Fetch all product documents from the database
        const products = await productModel.find({});
        // Send success response with the list of products
        res.json({success:true,products})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


//function for removing product
const removeProduct= async (req,res)=>{
    try {
         // Attempt to delete the product using the ID sent in the request body
        await productModel.findByIdAndDelete(req.body._id); // You can use req.body.id too, depending on your frontend
        // console.log(req.body);
        res.json({success:true,message:"Product Removed"});
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }
}

//function for single product info
const singleProduct= async (req,res)=>{
    try {
        // Destructure productId from the request body
        const {productId} = req.body;
        // Find the product in the database using its unique ID (_id)
        const product = await productModel.findById(productId);
        // Send the product data in the response with success = true
        res.json({success:true,product})
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message});
    }
}

export {listProduct,addProduct,removeProduct,singleProduct}

