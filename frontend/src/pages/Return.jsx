import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Return = () => {
  const { token, backendUrl, navigate, currency } = useContext(ShopContext);
  const location = useLocation();
  const item = location.state?.item;

  const [reason, setReason] = useState("");

  const handleReturn = async (e) => {
    e.preventDefault();
    if (!reason) {
      toast.error("Please provide a reason for return.");
      return;
    }
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/return`,
        {
          orderId: item.orderId,
          productId: item.productId,
          reason,
        },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Return request submitted!");
        navigate("/orders");
      } else {
        toast.error(response.data.message || "Failed to submit return request.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!item) {
    return <div className="p-6">No item found for return.</div>;
  }

  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 text-gray-800">
        <div className="sm:text-2xl">
          <Title text1={"Return"} text2={"Item"} />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 border p-4 rounded-md mb-8">
          <img src={item.image[0]} alt="product" className="w-24 sm:w-32" />
          <div className="flex-1">
            <p className="font-medium text-lg">{item.name}</p>
            <p className="text-sm mt-1">
              {currency} {item.price} &nbsp;|&nbsp; Quantity: {item.quantity} &nbsp;|&nbsp; Size: {item.size}
            </p>
            <p className="text-sm mt-1 text-gray-500">
              Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
            </p>
            <p className="text-sm mt-1 text-gray-500">
              Payment: <span className="text-gray-400">{item.paymentMethod}</span>
            </p>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleReturn}>
          <div>
            <label className="block mb-2 font-medium">Reason for Return</label>
            <textarea
              onChange={(e) => setReason(e.target.value)}
              value={reason}
              rows="4"
              placeholder="Explain reason..."
              className="w-full border p-2 rounded-sm outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800"
          >
            Submit Return Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Return;