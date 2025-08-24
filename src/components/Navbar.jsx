import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  // Calculate total quantity
  const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <nav className="bg=white shadow-md text-black">
      {/* Top Section: Website Name and Search Bar */}
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">Shop</div>

        <form className="flex items-center border rounded px-2 py-1 bg-white text-black relative w-1/2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full border-none focus:outline-none py-1 px-4"
          />
          <button type="submit" aria-label="Search" className="absolute right-2 top-2">
            <FaSearch className='text-red-500'/>
          </button>
        </form>

        <div className="flex items-center space-x-4">
          <Link to="/cart" aria-label="View Cart" className="relative hover:text-gray-400">
            <FaShoppingCart className="text-xl" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {totalQuantity}
              </span>
            )}
          </Link>
          <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
            Login | Register
          </button>
        </div>
      </div>

      {/* Bottom Section: Navigation Links */}
      <div className="flex items-centre  justify-center space-x-10 py-2 py-4 text-sm">
        <Link to="/" className="hover:text-red-800">Home</Link>
        <Link to="/Shop" className="hover:text-red-400">Shop</Link>
        <Link to="/contact" className="hover:text-red-400">Contact</Link>
        <Link to="/about" className="hover:text-red-400">About</Link>
      </div>
    </nav>
  );
};
