import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col items-center py-8">
      {/* Logo Section */}
      <div className="mb-10">
        <img src="/logo.png" alt="Fresh Mart Logo" className="h-12 mb-2" />
        <h1 className="text-2xl font-bold">FRESH MART</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-6">
        <a href="#" className="text-lg font-medium hover:text-gray-700">
          HOME
        </a>
        <a href="#" className="text-lg font-medium hover:text-gray-700">
          CUSTOMER
        </a>
        <a href="#" className="text-lg font-medium text-gray-400 cursor-not-allowed">
          SUPPLIER
        </a>
        <a href="#" className="text-lg font-medium hover:text-gray-700">
          PRODUCT
        </a>
        <a href="#" className="text-lg font-medium hover:text-gray-700">
          STOCK
        </a>
        <a href="#" className="text-lg font-medium hover:text-gray-700">
          DISCOUNT
        </a>
        <a href="#" className="text-lg font-medium hover:text-gray-700">
          SALE
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
