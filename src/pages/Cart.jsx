import React, { useState } from "react";
import EmptyCart from "../assets/Images/emptycart.png";
import { useSelector, useDispatch } from "react-redux";  // Added useDispatch hook
import { FaTrashAlt } from "react-icons/fa";
import { Modal } from "../components/Modal";
import { ChangeAddress } from "../components/ChangeAddress";
import { removeFromCart, updateQuantity } from "../pages/cartActions";  // Import actions

export const Cart = () => {
  const dispatch = useDispatch();  // Hook to dispatch actions
  const cart = useSelector((state) => state.cart);

  const totalItems = cart.products.reduce((sum, product) => sum + product.quantity, 0);
  const totalPrice = cart.products.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );
  const shippingCost = totalPrice > 0 ? 5.99 : 0;
  const [address, setAddress] = useState('IIT Patna');
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromCart(productId));  // Dispatch action to remove the product
  };

  const handleUpdateQuantity = (productId, change) => {
    const product = cart.products.find(p => p.id === productId);
    if (product.quantity + change >= 1) {
      dispatch(updateQuantity({ productId, quantity: product.quantity + change }));  // Send payload as an object
    }
  };
  

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {cart.products?.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">SHOPPING CART</h3>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-center font-semibold text-gray-700 border-b pb-2 mb-4">
                <p className="sm:col-span-2 md:col-span-2 mr-9">PRODUCTS</p>
                <p className="hidden md:block">PRICE</p>
                <p className="hidden md:block">QUANTITY</p>
                <p className="hidden md:block mr-7">REMOVE</p>
              </div>

              <div className="ml-8">
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-1 md:grid-cols-5 items-center text-center border-b py-4"
                  >
                    {/* Product Image and Name */}
                    <div className="flex items-center md:col-span-2 justify-center md:justify-start ">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover mr-4 rounded"
                      />
                      <h3 className="text-gray-800 text-sm font-medium">{product.name}</h3>
                    </div>

                    {/* Price */}
                    <p className="text-gray-700">${product.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center">
                      <button 
                        className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                        onClick={() => handleUpdateQuantity(product.id, -1)} // Decrease quantity
                      >
                        -
                      </button>
                      <p className="mx-2 text-gray-700">{product.quantity}</p>
                      <button 
                        className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                        onClick={() => handleUpdateQuantity(product.id, 1)} // Increase quantity
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <div className="flex justify-center md:justify-start">
                      <button 
                        className="text-red-500 hover:text-red-600 px-9"
                        onClick={() => handleRemoveProduct(product.id)} // Remove product
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="bg-white shadow-md rounded-lg p-6 h-fit">
            <h3 className="text-xl font-bold text-gray-800 mb-4">ORDER SUMMARY</h3>
            <div className="text-gray-700 space-y-4">
              <div className="flex justify-between">
                <p>Total Items</p>
                <p>{totalItems}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>${shippingCost.toFixed(2)}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p>Shipping To</p>
                  <p className="text-gray-700">{address}</p>
                </div>
                <button className="text-blue-500 hover:underline mt-2" onClick={() => setIsModelOpen(true)}>
                  Change Address
                </button>
              </div>
              <div className="flex justify-between font-semibold text-gray-900">
                <p>Total Price</p>
                <p>${(totalPrice + shippingCost).toFixed(2)}</p>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 mt-6 rounded hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>

          <Modal
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
          >
            <ChangeAddress address={address} setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full mt-16">
          <img src={EmptyCart} alt="Empty Cart" className="w-48 mb-4" />
          <p className="text-gray-600 text-lg">Your cart is empty!</p>
        </div>
      )}
    </div>
  );
};
