import React, { useState } from "react";

export const ChangeAddress = ({ address, setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState(address);

  // Handle Save button click
  const handleSave = () => {
    setAddress(newAddress);
    setIsModelOpen(false); // Close the modal after saving
  };

  // Handle Cancel button click
  const handleCancel = () => {
    setIsModelOpen(false); // Close the modal without saving
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Change Shipping Address</h3>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-600 mb-2">New Address</label>
        <input
          id="address"
          type="text"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter new address"
        />
      </div>
      <div className="flex justify-end space-x-4">
        {/* Cancel Button */}
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};
