import mongoose from "mongoose";

const exchangeSchema = new mongoose.Schema({
  orderId: {
    type: String,
    unique: true,
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
  requestedSize: {
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

const exchangeModel=mongoose.models.exchangeProduct || mongoose.model('exchangeProduct',exchangeSchema);
export default exchangeModel;