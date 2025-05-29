import React, { useState } from 'react';

function Creatproduct() {
  const initialState = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  };

  const [formData, setformData] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("http://localhost:3000/Products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Product added successfully');
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const { title, price, description, category, image } = formData;

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '40px auto', 
      padding: '20px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '8px', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff' 
    }}>
      <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Create Product</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input 
          type="text" 
          name="title" 
          value={title} 
          placeholder="Title" 
          onChange={handleChange}
          style={inputStyle}
        />
        <input 
          type="text" 
          name="price" 
          value={price} 
          placeholder="Price" 
          onChange={handleChange}
          style={inputStyle}
        />
        <input 
          type="text" 
          name="description" 
          value={description} 
          placeholder="Description" 
          onChange={handleChange}
          style={inputStyle}
        />
        <input 
          type="text" 
          name="image" 
          value={image} 
          placeholder="Image URL" 
          onChange={handleChange}
          style={inputStyle}
        />
        <select 
          name="category" 
          value={category} 
          onChange={handleChange}
          style={{ ...inputStyle, height: '40px' }}
        >
          <option value="">Select Category</option>
          <option value="jewelery">Jewelery</option>
          <option value="Electronics">Electronics</option>
          <option value="Women's clothing">Women's clothing</option>
          <option value="men's clothing">Men's clothing</option>
        </select>
        <button 
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '20px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '12px',
  marginBottom: '15px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '16px',
  outline: 'none',
  transition: 'border 0.3s',
  ':focus': {
    borderColor: '#4CAF50',
    boxShadow: '0 0 0 2px rgba(76,175,80,0.2)'
  }
};

export default Creatproduct;