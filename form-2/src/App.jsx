import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!", formData);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const formStyle = {
    backgroundColor: '#fff',
    padding: '25px 30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold'
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Name</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Phone</label>
        <input type="number" name="phone" placeholder="Phone" onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Address</label>
        <input type="text" name="address" placeholder="Address" onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>City</label>
        <select name="city" onChange={handleChange} style={inputStyle}>
          <option value="">Select City</option>
          <option value="Pune">Pune</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
        </select>

        <label style={labelStyle}>Gender</label>
        <div style={{ marginBottom: '15px' }}>
          <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male&nbsp;&nbsp;
          <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        </div>

        <div style={{ marginBottom: '15px' }}>
          <input type="checkbox" name="is_married" onChange={handleChange} /> Is Married
        </div>

        <input type="submit" value="Submit" style={{ ...inputStyle, backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }} />
      </form>
    </>
  );
}

export default App;
