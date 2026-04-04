import React from "react";

const Newsletter = () => {
  return (
    <div className="py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50">

      <div className="max-w-xl mx-auto text-center">

        {/* Title */}

        <h2 className="text-3xl font-semibold text-gray-800">
          Never Miss a Deal!
        </h2>

        {/* Subtitle */}

        <p className="text-gray-500 text-sm mt-2">
          Subscribe to get the latest offers, new arrivals, and exclusive discounts
        </p>

        {/* Input + Button */}

        <div className="flex items-center border rounded-md overflow-hidden mt-8 bg-white">

          <input
            type="email"
            placeholder="Enter your email id"
            className="flex-1 px-4 py-3 text-sm outline-none"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm transition">
            Subscribe
          </button>

        </div>

      </div>

    </div>
  );
};

export default Newsletter;