    import React, { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import ProductTable from '../data/ProductTable'

    const AddProduct = () => {
      const navigate = useNavigate()
      const [formData, setFormData] = useState({
        email: '',
        phoneNumber: '',
        signUpDate: '',
        accountType: ''
      })

      const handleSubmit = (e) => {
        e.preventDefault()  
        ProductTable.push(formData)
        navigate('/products')
      }

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }

      return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md dark:bg-gray-800 text-black dark:text-white">
          <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="date"
                name="signUpDate"
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <select
                name="accountType"
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Account Type</option>
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
              </select>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      )
    }
export default AddProduct