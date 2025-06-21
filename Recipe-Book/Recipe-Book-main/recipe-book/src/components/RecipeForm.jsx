import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addRecipe, updateRecipe } from '../redux/actions/recipeActions';
import { useNavigate, useParams } from 'react-router-dom';

export default function RecipeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', ingredients: '', category: '', date: '' });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/recipes/${id}`)
        .then(res => res.json())
        .then(data => setForm(data));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id ? `http://localhost:5000/recipes/${id}` : `http://localhost:5000/recipes`;
    const method = id ? 'PUT' : 'POST';
    const body = id ? JSON.stringify(form) : JSON.stringify({ ...form, date: new Date().toISOString() });

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body
    })
      .then(res => res.json())
      .then(data => {
        dispatch(id ? updateRecipe(data) : addRecipe(data));
        navigate('/');
      });
  };

  // Inline CSS Styles
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#f7f9fc',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
      fontFamily: "'Segoe UI', sans-serif"
    },
    label: {
      fontWeight: '600',
      marginBottom: '5px',
      color: '#333'
    },
    input: {
      padding: '10px',
      fontSize: '15px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      marginBottom: '18px',
      width: '100%'
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      fontWeight: '600',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={styles.container}>
      <Form.Group>
        <Form.Label style={styles.label}>Title</Form.Label>
        <Form.Control
          style={styles.input}
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label style={styles.label}>Ingredients</Form.Label>
        <Form.Control
          style={styles.input}
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label style={styles.label}>Category</Form.Label>
        <Form.Control
          style={styles.input}
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
      </Form.Group>

      <Button type="submit" style={styles.button}>
        {id ? 'Update' : 'Add'} Recipe
      </Button>
    </Form>
  );
}
