import React from 'react';
import deliveryImg from '../assets/delivery.png'; // update path as needed

const Delivery = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-10 px-5 py-10 max-w-6xl mx-auto text-gray-700">
      {/* Image on the left */}
      <div className="md:w-1/2 w-full ">
        <img src={deliveryImg} alt="Delivery" className="w-full h-auto md:h-[60vh] rounded-xl" />
      </div>

      {/* Text content on the right */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-5">Delivery Information</h1>
        <p className="mb-4">
          At Clothsy, we aim to deliver your order as quickly and efficiently as possible. We offer fast and reliable shipping to ensure your fashion reaches you on time.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Shipping Options:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Standard Delivery (5-7 business days)</li>
          <li>Express Delivery (2-3 business days)</li>
          <li>Free shipping on orders above ₹999</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Order Tracking:</h2>
        <p className="mb-4">
          Once your order is shipped, we will send you a tracking number via email or SMS. You can use it to track your shipment anytime.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Delivery Support:</h2>
        <p>
          If your order is delayed or you face any issues, contact us at <strong>support@clothsy.com</strong> or call <strong>+1-212-456-7890</strong>.
        </p>
      </div>
    </div>
  );
};

export default Delivery;
