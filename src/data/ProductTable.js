let products = [
     { 
       id: 1,
       email: 'jane@acme.com', 
       phoneNumber: '(201) 555-0124', 
       signUpDate: '2023-09-14', 
       accountType: 'Regular' 
     },
     { 
       id: 2,
       email: 'jacob@summit.com', 
       phoneNumber: '(907) 555-0101', 
       signUpDate: '2023-09-14', 
       accountType: 'Premium' 
     },
     { 
       id: 3,
       email: 'dianne@acme.com', 
       phoneNumber: '(201) 555-0124', 
       signUpDate: '2023-09-14', 
       accountType: 'Regular' 
     },
     { 
       id: 4,
       email: 'ralph@summit.com', 
       phoneNumber: '(907) 555-0101', 
       signUpDate: '2023-09-14', 
       accountType: 'Premium' 
     },
     { 
       id: 5,
       email: 'annette@acme.com', 
       phoneNumber: '(201) 555-0124', 
       signUpDate: '2023-09-14', 
       accountType: 'Regular' 
     },
     { 
       id: 6,
       email: 'wade@summit.com', 
       phoneNumber: '(907) 555-0101', 
       signUpDate: '2023-09-14', 
       accountType: 'Premium' 
     },
     { 
       id: 7,
       email: 'guy@acme.com', 
       phoneNumber: '(201) 555-0124', 
       signUpDate: '2023-09-14', 
       accountType: 'Regular' 
     },
     { 
       id: 8,
       email: 'devon@summit.com', 
       phoneNumber: '(907) 555-0101', 
       signUpDate: '2023-09-14', 
       accountType: 'Premium' 
     },
     { 
       id: 9,
       email: 'kristin@acme.com', 
       phoneNumber: '(201) 555-0124', 
       signUpDate: '2023-09-14', 
       accountType: 'Regular' 
     }
];

export const getProducts = () => products;

export const deleteProduct = (id) => {
  products = products.filter(product => product.id !== id);
  return products;
};

export const editProduct = (id, updatedProduct) => {
  products = products.map(product => 
    product.id === id ? { ...product, ...updatedProduct } : product
  );
  return products;
};

export const viewProduct = (id) => {
  return products.find(product => product.id === id);
};

export default products;
//export default ProductTable;