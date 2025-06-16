import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // Remove from cart
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.details}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemove(item.id)} style={styles.btn}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px'
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px'
  },
  empty: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#999'
  },
  card: {
    display: 'flex',
    gap: '20px',
    padding: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    alignItems: 'center'
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover'
  },
  details: {
    flex: 1
  },
  btn: {
    backgroundColor: '#e53e3e',
    color: 'white',
    padding: '6px 14px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default Cart;
