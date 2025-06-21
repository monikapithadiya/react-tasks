import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes } from '../redux/actions/recipeActions';
import RecipeDetails from './RecipeDetails';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function RecipeList() {
  const dispatch = useDispatch();
  const { recipeList } = useSelector(state => state.recipes);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/recipes')
      .then(res => res.json())
      .then(data => dispatch(setRecipes(data)));
  }, [dispatch]);

  const filtered = recipeList
    .filter(r => {
      const matchesCategory = filter ? r.category.toLowerCase().includes(filter.toLowerCase()) : true;
      const matchesTitle = search ? r.title.toLowerCase().includes(search.toLowerCase()) : true;
      return matchesCategory && matchesTitle;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  // Inline styles
  const styles = {
    container: {
      padding: '40px 20px',
      fontFamily: "'Segoe UI', sans-serif"
    },
    controlRow: {
      marginBottom: '24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px'
    },
    select: {
      padding: '10px',
      fontSize: '15px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      width: '100%'
    },
    input: {
      padding: '10px',
      fontSize: '15px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      width: '100%'
    },
    column: {
      marginBottom: '20px'
    }
  };

  return (
    <Container style={styles.container}>
      <Row style={styles.controlRow}>
        <Col md={4}>
          <Form.Select style={styles.select} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Control
            style={styles.input}
            placeholder="Filter by category..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            style={styles.input}
            placeholder="Search by recipe name..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        {filtered.map(recipe => (
          <Col md={4} key={recipe.id} style={styles.column}>
            <RecipeDetails recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
