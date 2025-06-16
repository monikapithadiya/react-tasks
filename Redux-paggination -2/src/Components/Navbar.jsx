import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      gap: '40px',
      margin: '20px',
      backgroundColor: 'lightblue',
      padding: '10px',
      justifyContent: 'center',
      margin:'0',
      fontSize: '20px',
      
    }}>
      <Link to='/' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</Link>
      <Link to='/login' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Login</Link>
      <Link to='/product' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Product</Link>
      <Link to='/productadd' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Add Product</Link>
       <Link to='/cart' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Add To Cart</Link>
      
    </nav>
  );
};

export default Navbar;
