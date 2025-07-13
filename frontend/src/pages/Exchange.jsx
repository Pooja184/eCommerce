import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Exchange = () => {

  const {currency,token,backendUrl,navigate}=useContext(ShopContext);
  const location = useLocation();
  const item = location.state?.item;

  const [orderId,setOrderId]=useState(item.orderId);
  const [productId, setProductId]=useState(item._id);
  const [reason,setReason]=useState('');
  const [requestedSize,setRequestedSize]=useState('');

  const handleExchange=async()=>{
    try {
      const response=await axios.post(backendUrl + '/api/exchange/exchangeProduct',{orderId,productId,reason,requestedSize},{headers:{token}});
      console.log(response.data);
      if(response.data.success){
        toast.success("Exchange requested successfully");
        navigate('/orders')
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }



  console.log(item);
  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 text-gray-800">
        {/* Title */}
       <div className="sm:text-2xl"> <Title text1={"Exchange"} text2={"Item"} /></div>

        {/* Order Summary */}
        <div className="flex flex-col sm:flex-row gap-6 border p-4 rounded-md mb-8">
          <img
            src={item.image[0]}
            alt="product"
            className="w-24 sm:w-32"
          />
          <div className="flex-1">
            <p className="font-medium text-lg">{item.name}</p>
            <p className="text-sm mt-1">
              {currency}{item.price} &nbsp;|&nbsp; Quantity: {item.quantity} &nbsp;|&nbsp; Size: {item.size}
            </p>
            <p className="text-sm mt-1 text-gray-500">
              Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
            </p>
            <p className="text-sm mt-1 text-gray-500">
              Payment: <span className="text-gray-400">{item.paymentMethod}</span>
            </p>
          </div>
        </div>

        {/* Exchange Form */}
        <form className="space-y-6"
        onSubmit={(e)=>{
          e.preventDefault();
          handleExchange();
        }}
        >
          {/* Select New Size */}
          <div>
            <label className="block mb-2 font-medium">Select New Size</label>
            <select onChange={(e)=>setRequestedSize(e.target.value)} className="border w-full p-2 rounded-sm outline-none">
              <option value="">Select size</option>
              {item.sizes.map((size,index)=>(
                <option value={size}  key={index}>{size}</option>
              )
              )}
            </select>
          </div>

          {/* Reason for Exchange */}
          <div>
            <label className="block mb-2 font-medium">
              Reason for Exchange
            </label>
            <textarea
            onChange={(e)=>setReason(e.target.value)}
            value={reason}
              rows="4"
              placeholder="Explain reason..."
              className="w-full border p-2 rounded-sm outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800"
          >
            Submit Exchange Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Exchange;

// <p>{item.name}</p>
// <img src={item.image[0]} alt="" />


