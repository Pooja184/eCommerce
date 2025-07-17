import exchangeModel from "../models/exchange.model.js";

const exchangeItem = async (req, res) => {
  try {
    const { orderId, productId, reason, requestedSize,status } = req.body;
    // Use userId from token (added by auth middleware)
    const userId = req.userId;

    const alreadyRequested = await exchangeModel.findOne({ orderId, productId });
    if (alreadyRequested) {
      return res.json({
        success: false,
        message: "Exchange already requested for this item.",
      });
    }

    const newExchange = new exchangeModel({
      userId,
      orderId,
      productId,
      reason,
      requestedSize,
      status,
    });
    await newExchange.save();
    res.json({ success: true, message: "Exchange requested successfully." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};



export { exchangeItem };
