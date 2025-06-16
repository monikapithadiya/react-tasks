import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    category: '',
    price: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(' http://localhost:3001/product', {
      ...formData,
      price: Number(formData.price)
    })
    .then(() => {
      alert("✅ Product added successfully!");
      navigate('/product'); // redirect to Product page
    })
    .catch(err => {
      console.error(err);
      alert("❌ Failed to add product.");
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Image URL:</label><br />
          <input type="text" name="image" value={formData.image} onChange={handleChange} required style={{ width: '100%', padding: '10px' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Title:</label><br />
          <input type="text" name="title" value={formData.title} onChange={handleChange} required style={{ width: '100%', padding: '10px' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Category:</label><br />
          <input type="text" name="category" value={formData.category} onChange={handleChange} required style={{ width: '100%', padding: '10px' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Price:</label><br />
          <input type="number" name="price" value={formData.price} onChange={handleChange} required style={{ width: '100%', padding: '10px' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Description:</label><br />
          <textarea name="description" value={formData.description} onChange={handleChange} required rows="4" style={{ width: '100%', padding: '10px' }}></textarea>
        </div>

        <button type="submit" style={{ padding: '12px 25px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
