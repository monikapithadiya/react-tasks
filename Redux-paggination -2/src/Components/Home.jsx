import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/product')
      .then((res) => {
        const categories = new Set();
        const selected = [];

        for (const product of res.data) {
          if (!categories.has(product.category) && categories.size < 3) {
            categories.add(product.category);
            selected.push(product);
          }
        }

        setFeaturedProducts(selected);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: '#f9fafb',
    }}>
      
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '70px 20px',
        background: 'linear-gradient(135deg, #ebf4ff, #c3dafe)',
        borderRadius: '16px',
        marginBottom: '50px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#2a4365' }}>
          Welcome to Our Store
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '35px', color: '#4a5568' }}>
          Find amazing deals on high-quality products. Limited stock available!
        </p>
        <button
          onClick={() => navigate('/product')}
          style={{
            padding: '14px 30px',
            backgroundColor: '#4c51bf',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#434190'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4c51bf'}
        >
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center', color: '#2d3748' }}>
          Featured Products
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '25px'
        }}>
          {featuredProducts.map((item) => (
            <div key={item.id} style={{
              padding: '20px',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              textAlign: 'center',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '170px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '10px',
                color: '#2c5282'
              }}>{item.title}</h3>

              <p style={{
                color: '#718096',
                marginBottom: '10px',
                fontSize: '0.95rem',
                minHeight: '45px'
              }}>{item.description}</p>

              <h4 style={{
                color: '#2d3748',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginBottom: '15px'
              }}>
                ₹{item.price}
              </h4>

              <button
                onClick={() => navigate('/product')}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#3182ce',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2b6cb0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3182ce'}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
