import React from 'react';
import privacyImg from '../assets/privacy1.png'; // replace with actual path

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-20 px-5 py-10 max-w-6xl mx-auto text-gray-700">
      
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src={privacyImg}
          alt="Privacy Policy"
          className="w-full h-auto  rounded-xl "
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-5 text-black">Privacy Policy</h1>
        
        <p className="mb-4">
          At <strong>Clothsy</strong>, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Personal details: name, email, phone number</li>
          <li>Shipping & billing addresses</li>
          <li>Payment details (processed securely)</li>
          <li>Browsing & purchase history</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To process your orders and payments</li>
          <li>To send updates and offers via email/SMS</li>
          <li>To improve our services and user experience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4">
          You may request to access, update, or delete your data by contacting us at <strong>privacy@clothsy.com</strong>. We respect your control over your information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
        <p className="mb-4">
          We may use trusted third-party tools (e.g., payment processors) that adhere to strict security standards. Your data is never sold or misused.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Updates to This Policy</h2>
        <p className="mb-4">
          We may occasionally update this Privacy Policy. All changes will be posted here with the updated date.
        </p>

        <p>
          If you have questions, feel free to contact us at <strong>support@clothsy.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
