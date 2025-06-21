import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', true);
    navigate('/');
  };

  // Inline styles
  const styles = {
    container: {
      marginTop: '100px',
      padding: '40px',
      maxWidth: '400px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
      textAlign: 'center',
      fontFamily: "'Segoe UI', sans-serif"
    },
    heading: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '30px',
      color: '#2c3e50'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: '500',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '6px',
      color: '#fff',
      cursor: 'pointer'
    }
  };

  return (
    <Container style={styles.container}>
      <h3 style={styles.heading}>Login</h3>
      <Button style={styles.button} onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}
