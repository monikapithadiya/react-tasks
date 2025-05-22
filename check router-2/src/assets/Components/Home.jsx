import React from 'react';
import { Navbar } from 'react-bootstrap';
import Footer from './Footer';

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      <div style={{ flex: 1, padding: '10px ', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '15px', color: '#222' }}>
          ComicVerseHub
        </h2>

        <p style={{
          fontSize: '1.3rem',
          maxWidth: '720px',
          margin: '0 auto 30px auto',
          color: '#444',
          lineHeight: '1.6'
        }}>
          Discover a universe of amazing comics, epic characters, and thrilling stories.
          Browse our collection, learn more about your favorite heroes, and dive into new adventures!
        </p>

        <div style={{
          width: '50%',
          maxWidth: '1200px',
          margin: '0 auto',
          overflow: 'hidden',
          borderRadius: '12px',
        }}>
          <img
            src="https://guysfilmquest.wordpress.com/wp-content/uploads/2019/04/infinity_war.jpg"
            alt="Comics Banner"
            style={{
              width: '80%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
              marginLeft: "90px"
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
