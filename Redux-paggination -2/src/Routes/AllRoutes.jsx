import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Product from '../Components/Product';
import Login from '../Components/Login';
import ProductAdd from '../Components/ProductAdd';
import Cart from '../Components/Cart';




const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/login' element={<Login />} />
      <Route path='/productadd' element={<ProductAdd />} />
      <Route path='/Cart' element={<Cart />} />
      
        
     
    </Routes>
  );
};

export default AllRoutes;

