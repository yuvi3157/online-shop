// InfoSection.jsx
import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTag, FaUndo } from 'react-icons/fa';

const InfoSection = () => {
  // Example data for the info items
  const infoItems = [
    {
      icon: <FaShippingFast className="text-red-500 text-4xl" />, 
      title: 'Free Shipping',
      description: 'Get your orders delivered with no extra cost.',
    },
    {
      icon: <FaHeadset className="text-red-500 text-4xl" />, 
      title: 'Support 24/7',
      description: 'We are here to assist you anytime.',
    },
    {
      icon: <FaMoneyBillWave className="text-red-500 text-4xl" />, 
      title: '100% Money Back',
      description: 'Full refund if you are not satisfied.',
    },
    {
      icon: <FaLock className="text-red-500 text-4xl" />, 
      title: 'Payment Secure',
      description: 'Your payment information is safe with us.',
    },
    {
      icon: <FaTag className="text-red-500 text-4xl" />, 
      title: 'Discount',
      description: 'Enjoy the best prices on our products.',
    },
    {
      icon: <FaUndo className="text-red-500 text-4xl" />, 
      title: 'Easy Returns',
      description: 'Hassle-free returns for your convenience.',
    },
  ];

  return (
    
      <div className="max-w-20xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 ">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    
  );
};

export default InfoSection;
