import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductTable, { editProduct } from '../data/ProductTable';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    signUpDate: '',
    accountType: ''
  });

  useEffect(() => {
    const product = ProductTable.find(p => p.id === parseInt(id));
    if (product) {
      setFormData(product);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(parseInt(id), formData);
    navigate('/products');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-32 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="signUpDate"
            value={formData.signUpDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Account Type</option>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
