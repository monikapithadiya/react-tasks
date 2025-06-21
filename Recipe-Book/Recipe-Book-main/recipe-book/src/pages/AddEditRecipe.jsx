import React from 'react';
import RecipeForm from '../components/RecipeForm';
import { Container } from 'react-bootstrap';

export default function AddEditRecipe() {
  const styles = {
    container: {
      marginTop: '40px',
      padding: '30px',
      maxWidth: '700px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
      fontFamily: "'Segoe UI', sans-serif"
    },
    heading: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#2c3e50'
    }
  };

  return (
    <Container style={styles.container}>
      <h3 style={styles.heading}>Add / Edit Recipe</h3>
      <RecipeForm />
    </Container>
  );
}
