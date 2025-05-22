// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#1c1c1c',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      fontSize: '14px',
      height:'80px'
    }}>
      <p style={{ margin: '5px 0' }}>
        &copy; {new Date().getFullYear()} ComicVerseHub. All rights reserved.
      </p>
      <p style={{ margin: '5px 0' }}>
        Contact us: comicversehub@gmail.com | +91 98765 43210
      </p>
      <p style={{ margin: '5px 0' }}>
        Follow us on: Facebook | Twitter | Instagram
      </p>
    </div>
  );
};

export default Footer;
