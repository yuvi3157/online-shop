// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { descriptionData } from '../assets/descriptionData';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
export const ProductDetails = () => {
  const dispatch = useDispatch();
  
  const handleAddTocart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added successfully");
  };
  const { productId } = useParams();
  const product = useSelector((state) => state.products.products.find(p => p.id === parseInt(productId)));
  const details = descriptionData.find(item => item.id === parseInt(productId));

  if (!product || !details) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full h-96 object-contain" />
        <div>
          <h2 className="text-3xl font-bold">{details.name}</h2>
          <p className="text-lg mt-4">{details.description}</p>
          <p className="text-xl text-gray-600 mt-2">Price-${product.price}</p>

          {/* Specifications */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Specifications:</h3>
            <ul className="list-disc pl-5">
              {Object.entries(details.specifications).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>

          {/* Warranty and Return Policy */}
          <div className="mt-6">
            <p><strong>Warranty:</strong> {details.warranty}</p>
            <p><strong>Return Policy:</strong> {details.returnPolicy}</p>
          </div>

          <button 
        className="mt-4 px-4 py-2 w-1/4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        onClick={(e) => handleAddTocart(e, product)}
      >
        Add to Cart
      </button>
        </div>
      </div>
    </div>
  );
};
