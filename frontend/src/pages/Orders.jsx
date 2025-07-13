import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  // const {products,currency}=useContext(shopContext);
  const { backendUrl, token, currency, navigate } = useContext(ShopContext);


  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      // console.log(response, "response");

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["status"] = order.status;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            // item["productId"] = order._id;
            item["orderId"] = order._id;
            item["productId"] = item._id;
            allOrdersItem.push(item);
          });
        });
        // console.log(allOrdersItem, "all orders");
        // console.log(allOrdersItem[0]._id,"allOrders");
        // console.log(orderData,"orderData");
        setOrderData(allOrdersItem.reverse());

        // Fetch Exchange Requests
        
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  // console.log(orderData,"Order data");

  
  return (
    <div className="border-t pt-16 ">
      <div className="text-2xl ">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {
          // products.slice(1,4).map
          orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 "
            >
              <div className="flex items-start gap-6 text-sm ">
                <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center mt-1 gap-3 text-base text-gray-700">
                    <p>
                      {currency} {item.price}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size:{item.size}</p>
                  </div>
                  <p className="mt-1">
                    Date:{" "}
                    <span className="text-gray-400">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  <p className="mt-1">
                    Payment:{" "}
                    <span className="text-gray-400">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500 "></p>
                  <p className="text-sm md:text-base ">{item.status}</p>
                </div>
                
                  <button
                    onClick={() => navigate("/exchange", { state: { item } })}
                    className="border mr-2 px-4 py-2 text-sm font-medium rounded-sm"
                  >
                    Exchange
                  </button>
               
                <button
                  onClick={() => navigate("/exchange")}
                  className="border mr-2 px-4 py-2 text-sm font-medium rounded-sm"
                >
                  Return
                </button>
                <button
                  onClick={loadOrderData}
                  className="border px-4 py-2 text-sm font-medium rounded-sm"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Orders;
