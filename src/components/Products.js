import React, { useState } from 'react'
import ProductTable, { deleteProduct, editProduct } from '../data/ProductTable'
import { FaSearch } from "react-icons/fa";
import { IoGridOutline, IoListOutline } from "react-icons/io5";
import TableView from '../utils/TableView'
import BoardView from '../utils/BoardView'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Products = () => {
   const navigate = useNavigate();
   const [products, setProducts] = useState(ProductTable);
   const [filter, setFilter] = useState({ from: '', to: '', accountType: '', keyword: '' });
   const [view, setView] = useState('table')

   const handleFilter = (e) => {
     const {name , value} = e.target;
     setFilter({...filter, [name]: value})
   }

   const applyFilter = () => {
     let filteredData = ProductTable;
     if(filter.keyword) {
          filteredData = filteredData.filter(
               item => item.email.toLowerCase().includes(filter.keyword.toLowerCase()) || 
               item.phoneNumber.includes(filter.keyword)
          )
     }
     setProducts(filteredData)
   }

  const handleDelete = (id) => {
    const updatedProducts = deleteProduct(id);
    setProducts([...updatedProducts]);
    toast.success('Product deleted successfully');
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view-product/${id}`);
  };

  return (
    <main className='min-h-screen bg-gradient-to-b from-white to-gray-50 text-black dark:bg-gray-800  dark:text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='pt-[140px] pb-8'>
          <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
              Products
            </h1>

            <button 
              onClick={() => navigate('/add-product')}
              className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
              transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95'>
              Add Product
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className='mt-8'>
            <ul className='flex space-x-8 border-b'>
              {['All Products', 'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty & Health'].map((item) => (
                <li key={item} className='group pb-2'>
                  <a href='/' className='text-gray-600 hover:text-blue-600 font-medium transition-colors'>
                    {item}
                  </a>
                  <div className='h-1 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left 
                    bg-gradient-to-r from-blue-600 to-purple-600'></div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Search and View Controls */}
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-4 flex-1 max-w-md'>
            <div className='relative flex-1'>
              <input
                type="text"
                name="keyword"
                value={filter.keyword}
                onChange={handleFilter}
                className="w-full pl-4 pr-10 py-2 rounded-xl border border-gray-200 focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                placeholder="Search products..."
              />
              <button 
                onClick={applyFilter}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaSearch />
              </button>
            </div>
          </div>

          <div className='flex items-center gap-3 rounded-xl p-2 bg-slate-300'>
            <button 
              onClick={() => setView('table')}
              className={`p-2 rounded-lg transition-all ${view === 'table' ? 
                'bg-slate-400  text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
            >
              <IoListOutline size={24} />
            </button>
            <button 
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg transition-all ${view === 'Board' ? 
                'bg-slate-500  text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <IoGridOutline size={24} />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
          {view === 'table' ? (
            <TableView 
              data={products} 
              actions={{
                onDelete: handleDelete,
                onEdit: handleEdit,
                onView: handleView
              }}
            />
          ) : (
            <BoardView 
              data={products}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </div>
      </div>
    </main>
  )
}
export default Products