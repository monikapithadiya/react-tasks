import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{
      backgroundColor: '#333',
      paddingTop: '20px',
      display: 'flex',
      gap: '30px',
      height: '40px',
      fontSize: '20px',
    }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginLeft: '20px' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </div>
  );
};

export default Navbar;
