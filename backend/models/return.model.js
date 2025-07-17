import mongoose from "mongoose";

const returnSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Requested",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const returnModel=mongoose.models.returnProduct || mongoose.model('returnProduct',returnSchema);
export default returnModel;