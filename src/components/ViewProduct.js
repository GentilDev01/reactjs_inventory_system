import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductTable from '../data/ProductTable';

const ViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ProductTable.find(p => p.id === parseInt(id));

  return (
    <div className="max-w-2xl mx-auto mt-32 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Product Details</h2>
      <div className="space-y-4">
        <div>
          <label className="font-bold">Email:</label>
          <p>{product?.email}</p>
        </div>
        <div>
          <label className="font-bold">Phone Number:</label>
          <p>{product?.phoneNumber}</p>
        </div>
        <div>
          <label className="font-bold">Sign Up Date:</label>
          <p>{product?.signUpDate}</p>
        </div>
        <div>
          <label className="font-bold">Account Type:</label>
          <p>{product?.accountType}</p>
        </div>
        <button
          onClick={() => navigate('/products')}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
