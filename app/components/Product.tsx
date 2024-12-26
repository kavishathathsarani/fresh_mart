"use client";

import React, { useState, useEffect } from "react";

const DateTimeWithCalendar: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");
  const [tables, setTables] = useState<any[][]>([[]]); // Array of tables, each table is an array of rows
  const [formData, setFormData] = useState({
    productId: "",
    productName: "",
    netWeight: "",
    manufacturerDate: "",
    expiryDate: "",
  });
  const [editIndex, setEditIndex] = useState<{ tableIndex: number; rowIndex: number } | null>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setCurrentDateTime(date.toLocaleString("en-US", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    if (editIndex) {
      const updatedTables = [...tables];
      updatedTables[editIndex.tableIndex][editIndex.rowIndex] = formData;
      setTables(updatedTables);
      setEditIndex(null);
    } else {
      const updatedTables = [...tables];
      updatedTables[updatedTables.length - 1].push(formData);
      setTables(updatedTables);
    }
    setFormData({
    productId: "",
    productName: "",
    netWeight: "",
    manufacturerDate: "",
    expiryDate: "",
    });
  };

  const handleAddTable = () => {
    setTables([...tables, []]); // Add a new empty table
  };

  const handleDelete = () => {
    if (editIndex) {
      const updatedTables = [...tables];
      updatedTables[editIndex.tableIndex].splice(editIndex.rowIndex, 1);
      setTables(updatedTables);
      setEditIndex(null);
      setFormData({
      productId: "",
      productName: "",
      netWeight: "",
      manufacturerDate: "",
      expiryDate: "",
      });
    }
  };

  const handleEdit = () => {
    if (editIndex) {
      setFormData(tables[editIndex.tableIndex][editIndex.rowIndex]);
    }
  };

  const handleClear = () => {
    setFormData({
    productId: "",
    productName: "",
    netWeight: "",
    manufacturerDate: "",
    expiryDate: "",
    });
    setEditIndex(null);
  };

  return (
    <div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">📅</span>
            <span className="text-xl font-medium">{currentDateTime}</span>
          </div>

          <div className="flex justify-end items-center space-x-4">
            <button
              onClick={handleAddTable}
              className="bg-[#B1CED4] text-black font-quicksand text-[18px] font-semibold w-[175px] h-[58px] rounded-md flex items-center justify-center space-x-2 transform hover:bg-[#A0BCC3] transition duration-200 ease-in-out"
            >
              <span className="text-lg">➕</span>
              <span>Add Table</span>
            </button>
          </div>
        </div>

        {tables.map((table, tableIndex) => (
          <div key={tableIndex} className="mb-8">
            <table className="table-auto border-collapse w-full text-left bg-[#F7F7F7] rounded-md">
              <thead className="bg-[#E5ECEF] text-black">
                <tr>
                  <th className="border-b px-4 py-2">Product ID</th>
                  <th className="border-b px-4 py-2">Product Name</th>
                  <th className="border-b px-4 py-2">Net Weight</th>
                  <th className="border-b px-4 py-2">Manufacture Date</th>
                  <th className="border-b px-4 py-2">expiryDate</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    onClick={() =>
                      setEditIndex({ tableIndex, rowIndex })
                    }
                    className={
                      editIndex &&
                      editIndex.tableIndex === tableIndex &&
                      editIndex.rowIndex === rowIndex
                        ? "bg-gray-300"
                        : ""
                    }
                  >
                    <td className="border-b px-4 py-2 bg-[#EAF0F0]">{row.productId}</td>
                    <td className="border-b px-4 py-2 bg-[#EAF0F0]">{row.productName}</td>
                    <td className="border-b px-4 py-2 bg-[#EAF0F0]">{row.netWeight}</td>
                    <td className="border-b px-4 py-2 bg-[#EAF0F0]">{row.manufacturerDate}</td>
                    <td className="border-b px-4 py-2 bg-[#EAF0F0]">{row.expiryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4 mb-8">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex items-center mb-4">
              <label className="font-quicksand text-sm mr-3 capitalize w-[150px]">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              {key === "paymentMethod" ? (
                <select
                  name={key}
                  value={formData[key as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-[#A0BCC3] w-[253px] h-[46px]"
                >
                 
                </select>
              ) : (
                <input
                  type={key === "manufacturerDate" || key === "expiryDate" ? "date" : "text"}
                  name={key}
                  value={formData[key as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-[#A0BCC3] w-[253px] h-[46px]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-8">
          <button
            className="bg-[#B1CED4] text-black font-quicksand text-[18px] font-semibold w-[175px] h-[58px] rounded-md flex items-center justify-center space-x-2 transform hover:bg-[#A0BCC3] transition duration-200 ease-in-out"
            onClick={handleAdd}
          >
            <span className="text-blue-500 text-lg">+</span>
            <span>{editIndex ? "Update" : "Add"}</span>
          </button>

          <button
            className="bg-[#B1CED4] text-black font-quicksand text-[18px] font-semibold w-[175px] h-[58px] rounded-md flex items-center justify-center space-x-2 transform hover:bg-[#A0BCC3] transition duration-200 ease-in-out"
            onClick={handleDelete}
          >
            <span className="text-lg">🗑</span>
            <span>Delete</span>
          </button>

          <button
            className="bg-[#B1CED4] text-black font-quicksand text-[18px] font-semibold w-[175px] h-[58px] rounded-md flex items-center justify-center space-x-2 transform hover:bg-[#A0BCC3] transition duration-200 ease-in-out"
            onClick={handleEdit}
          >
            <span className="text-lg">✏</span>
            <span>Edit</span>
          </button>

          <button
            className="bg-[#B1CED4] text-black font-quicksand text-[18px] font-semibold w-[175px] h-[58px] rounded-md flex items-center justify-center space-x-2 transform hover:bg-[#A0BCC3] transition duration-200 ease-in-out"
            onClick={handleClear}
          >
            <span className="text-lg">❌</span>
            <span>Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateTimeWithCalendar;