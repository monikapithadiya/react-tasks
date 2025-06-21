import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../redux/actions/recipeActions';
import { useNavigate } from 'react-router-dom';

export default function RecipeDetails({ recipe }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:5000/recipes/${recipe.id}`, { method: 'DELETE' })
      .then(() => dispatch(deleteRecipe(recipe.id)));
  };

  const styles = {
    card: {
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      padding: '20px',
      backgroundColor: '#ffffff',
      transition: 'box-shadow 0.3s ease-in-out'
    },
    title: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '8px'
    },
    subtitle: {
      fontSize: '14px',
      color: '#888',
      marginBottom: '12px'
    },
    ingredients: {
      fontSize: '15px',
      color: '#333',
      marginBottom: '16px',
      whiteSpace: 'pre-wrap'
    },
    button: {
      marginRight: '10px',
      padding: '10px 18px',
      fontSize: '14px',
      fontWeight: '500',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    editButton: {
      backgroundColor: '#3498db', // modern blue
      color: '#fff'
    },
    deleteButton: {
      backgroundColor: '#e74c3c', // clean, rich red
      color: '#fff'
    }
  };

  return (
    <Card className="mb-3" style={styles.card}>
      <Card.Body>
        <Card.Title style={styles.title}>{recipe.title}</Card.Title>
        <Card.Subtitle style={styles.subtitle}>{recipe.category}</Card.Subtitle>
        <Card.Text style={styles.ingredients}>
          {Array.isArray(recipe.ingredients)
            ? recipe.ingredients.join(', ')
            : recipe.ingredients}
        </Card.Text>
        <Button
          style={{ ...styles.button, ...styles.editButton }}
          onClick={() => navigate(`/edit/${recipe.id}`)}
        >
          ✏️ Edit
        </Button>
        <Button
          style={{ ...styles.button, ...styles.deleteButton }}
          onClick={handleDelete}
        >
          🗑️ Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
