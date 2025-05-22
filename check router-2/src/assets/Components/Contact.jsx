import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      
      <div style={styles.infoSection}>
        <p><strong>Email:</strong> support@comicversehub.com</p>
        <p><strong>Phone:</strong> +1 (800) 123-4567</p>
        <p><strong>Address:</strong> 123 Comic Street, Hero City, USA</p>
      </div>

      <form style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input type="text" placeholder="Enter your name" style={styles.input} required />

        <label style={styles.label}>Email:</label>
        <input type="email" placeholder="Enter your email" style={styles.input} required />

        <label style={styles.label}>Message:</label>
        <textarea placeholder="Your message..." style={styles.textarea} rows="5" required></textarea>

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  infoSection: {
    marginBottom: '20px',
    fontSize: '16px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px'
  },
  textarea: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Contact;
