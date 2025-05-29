import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Creatproduct from './Component/Creatproduct.jsx';
import Product from './Component/Product.jsx';

function App() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
     
        <h1 style={{
          color: '#333',
          fontSize: '2.5rem',
          textAlign: 'center',
          margin: 0,
          background: 'linear-gradient(90deg, #646cff, #61dafb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>HOME PAGE</h1>
        <div style={{ width: '90px' }}></div> {/* Spacer for alignment */}
      </div>
      
      <hr style={{
        border: 'none',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #646cff, #61dafb, transparent)',
        margin: '30px 0'
      }}/>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        marginTop: '30px'
      }}>
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <Creatproduct/>
        </div>
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default App