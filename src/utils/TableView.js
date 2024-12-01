import React, { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { FaTrash, FaEdit } from "react-icons/fa";

const TableView = ({ data, actions }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
   const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleAction = (type, id) => {
    switch(type) {
      case 'view':
        actions.onView(id);
        break;
      case 'edit':
        actions.onEdit(id);
        break;
      case 'delete':
        actions.onDelete(id);
        break;
      default:
        break;
    }
  };
  
  return (
     <div>
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
          <th className="first:rounded-l-xl last:rounded-r-xl px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Phone Number</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Sign Up Date</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Account Type</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {currentItems.map(item => (
          <tr key={item.email} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm text-gray-600">{item.email}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{item.phoneNumber}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{item.signUpDate}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{item.accountType}</td>
            <td className="px-6 py-4 text-sm text-gray-600">
              <div className="flex gap-2">
                <button 

                  onClick={() => handleAction('view', item.id)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                >
                  <AiOutlineEye size={18} />
                </button>
                <button 

                  onClick={() => handleAction('edit', item.id)}
                  className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                >
                  <FaEdit size={18} />
                </button>
                <button 

                  onClick={() => handleAction('delete', item.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    <div className="flex justify-between items-center mt-4 px-6">
    <span className="text-sm text-gray-700">
      Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, data.length)} of {data.length} data we have
    </span>
    <div className="flex gap-2">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
   </div>
  </div>
  );

};
export default TableView;