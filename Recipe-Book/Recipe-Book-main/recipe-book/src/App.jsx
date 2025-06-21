import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddEditRecipe from './pages/AddEditRecipe';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/add" element={<AddEditRecipe />} />
          <Route path="/edit/:id" element={<AddEditRecipe />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
