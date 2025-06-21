import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function CustomNavbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  // Inline styles
  const styles = {
    navbar: {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '10px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    brand: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#2c3e50',
      textDecoration: 'none'
    },
    navLink: {
      color: '#2c3e50',
      fontSize: '16px',
      marginLeft: '20px',
      transition: 'color 0.3s ease'
    },
    navLinkHover: {
      color: '#007bff'
    }
  };

  return (
    <Navbar expand="lg" style={styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={styles.brand}>
          Recipe Book
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" style={styles.navLink}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/add" style={styles.navLink}>
            Add Recipe
          </Nav.Link>
          <Nav.Link onClick={logout} style={styles.navLink}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
