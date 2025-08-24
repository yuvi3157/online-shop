// src/components/ProductCard.js
import React from 'react';
import { FaStar } from 'react-icons/fa'; 
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddTocart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added successfully");
  };

  return (
    <div className="bg-white p-4 shadow rounded relative border transform-transition duration-300 hover:scale-105">
      <Link to={`/product/${product.id}`} className="block">
        <img 
          className="w-full h-48 object-contain mb-4" 
          src={product.image} 
          alt={product.name} 
        />
      </Link>

      {/* Product Name and Price */}
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600 text-lg">${product.price}</p>

      {/* Rating (stars) */}
      <div className="flex mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>

      {/* Add to Cart */}
      <button 
        className="mt-4 px-4 py-2 w-full bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
        onClick={(e) => handleAddTocart(e, product)}
      >
        Add to Cart
      </button>
    </div>
  );
};
