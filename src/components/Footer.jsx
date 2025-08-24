import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">e-Shop</h3>
          <p className="text-gray-400">
            Your one-stop shop for all your needs. Shop with us and experience the best online shopping experience.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
          </div>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-l-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-gray-500 text-sm text-center">
        <p>&copy; 2024 e-Shop. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
