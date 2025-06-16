import React from 'react';

const Login = () => {
  return (
    <div style={{
      maxWidth: '400px',
      margin: '100px auto',
      padding: '30px',
      boxShadow: '0 0 12px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <input type="text" placeholder="Username" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#3182ce',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontWeight: '600',
        cursor: 'pointer'
      }}>
        Login
      </button>
    </div>
  );
};

export default Login;
