    import React, { useState } from 'react';
    import ProductTable from '../data/ProductTable';
      const BoardView = ({ data, actions }) => {
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 6;
        const accountType = ['Regular', 'Premium'];

        const groupedData = accountType.reduce((acc, type) => {
          const typeData = data.filter(item => item.accountType === type);
          const indexOfLastItem = currentPage * itemsPerPage;
          const indexOfFirstItem = indexOfLastItem - itemsPerPage;
          acc[type] = typeData.slice(indexOfFirstItem, indexOfLastItem);
          return acc;
        }, {});

        const maxItems = Math.max(...accountType.map(type => 
          data.filter(item => item.accountType === type).length
        ));
        const totalPages = Math.ceil(maxItems / itemsPerPage);

        return (
          <div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {accountType.map(type => (
                <div key={type} className="flex-none w-80 bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">{type}</h2>
                  <div className="space-y-4">
                    {groupedData[type].map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-gray-800">{item.email}</h3>
                        <p className="text-sm text-gray-600">{item.phoneNumber}</p>
                        <p className="text-xs text-gray-500">{item.signUpDate}</p>
                        <div className="flex gap-2 mt-2">
                          <button onClick={() => actions.onView(item.id)}>View</button>
                          <button onClick={() => actions.onEdit(item.id)}>Edit</button>
                          <button onClick={() => actions.onDelete(item.id)}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-2">
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
        );
      };


    export default BoardView;