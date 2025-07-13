import React from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const NewsletterBox = () => {
  const { backendUrl } = useContext(ShopContext);
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/subscribe/subscribeuser',{email});
      console.log(response.data);
      if(response.data.success){
        toast.success("You've successfully subscribed.");
        
      }else{
        toast.error(response.data.message);
      }
      setEmail("");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Stay updated with the latest deals, fashion tips, and exclusive offers
        delivered directly to your inbox.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
          className="w-full sm:flex-1 outline-none "
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
