import express from "express";
import {
  listProduct,
  addProduct,
  removeProduct,
  singleProduct,
} from "../controllers/product.controller.js";
import upload from "../middleware/multer.js"; // Import Multer middleware for image upload handling
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();


// Add a new product
// - Uses Multer to accept up to 4 image files (images1–images4, 1 file each)
productRouter.post(
  "/add",adminAuth, // Middleware to check if the request is coming from an authorized admin
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove",adminAuth, removeProduct);
productRouter.post("/single",singleProduct);
productRouter.get("/list", listProduct);

export default productRouter;
