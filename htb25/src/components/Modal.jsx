import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking the background
    >
      <div
        className="bg-dark rounded-2xl shadow-lg p-8 w-1/3 relative z-60"
        onClick={(e) => e.stopPropagation()} // Prevent click propagation to the background
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg text-dark_c_2">Add to Watchlist</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl font-semibold cursor-pointer"
          ></button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
