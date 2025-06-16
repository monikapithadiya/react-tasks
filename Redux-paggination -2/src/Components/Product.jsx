import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const [value, setValue] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editPrice, setEditPrice] = useState("");
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  // 🛒 Cart state with localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/product?_page=${page}&_limit=6`)
      .then((res) => {
        setValue(res.data);
        setFiltered(res.data);
      })
      .catch(() => toast.error("Failed to fetch products"));
  }, [page]);

  useEffect(() => {
    let data = [...value];

    if (search) {
      data = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (category) {
      data = data.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }

    if (sortOrder === 'low') {
      data.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      data.sort((a, b) => b.price - a.price);
    }

    setFiltered(data);
  }, [search, category, sortOrder, value]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/product/${id}`)
      .then(() => {
        setFiltered(filtered.filter((item) => item.id !== id));
        toast.success("Product deleted");
      })
      .catch(() => toast.error("Delete failed"));
  };

  const handleEdit = (id) => {
    const product = filtered.find((el) => el.id === id);
    setEditingId(id);
    setEditPrice(product.price);
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:3001/product/${id}`, {
      ...filtered.find(el => el.id === id),
      price: editPrice
    })
      .then((res) => {
        setFiltered(filtered.map(el => el.id === id ? res.data : el));
        setEditingId(null);
        toast.success("Price updated");
      })
      .catch(() => toast.error("Update failed"));
  };

  // ✅ Add to cart
  const handleAddToCart = (product) => {
    const alreadyInCart = cart.find(item => item.id === product.id);
    if (alreadyInCart) {
      toast.info("Item already in cart");
      return;
    }
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Added to cart");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Filter by category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.input}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={styles.input}
        >
          <option value="">Sort by price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px',
        padding: '20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {filtered.map((el) => (
          <div key={el.id} style={styles.card}>
            <div style={styles.categoryTag}>{el.category}</div>

            <div style={styles.imageWrapper}>
              <img src={el.image} alt={el.title} style={styles.image} />
            </div>

            <div style={styles.cardBody}>
              <h3 style={styles.title}>{el.title}</h3>
              <p style={styles.description}>{el.description}</p>

              <div style={styles.footer}>
                {editingId === el.id ? (
                  <input
                    type="text"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    style={styles.editInput}
                  />
                ) : (
                  <h4 style={styles.price}>${el.price}</h4>
                )}

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {editingId === el.id ? (
                    <button onClick={() => handleSave(el.id)} style={styles.saveBtn}>
                      Save
                    </button>
                  ) : (
                    <button onClick={() => handleEdit(el.id)} style={styles.editBtn}>
                      Edit
                    </button>
                  )}
                  <button onClick={() => handleDelete(el.id)} style={styles.deleteBtn}>
                    Delete
                  </button>
                  <button onClick={() => handleAddToCart(el)} style={styles.cartBtn}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.pagination}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={{
            ...styles.pageBtn,
            backgroundColor: page === 1 ? '#e2e8f0' : '#4299e1',
            color: page === 1 ? '#a0aec0' : '#fff',
            cursor: page === 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          style={styles.pageBtn}
        >
          Next
        </button>
      </div>
    </>
  );
};

const styles = {
  input: {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '200px'
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: '430px'
  },
  categoryTag: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: '#4f46e5',
    color: '#fff',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    zIndex: 2
  },
  imageWrapper: {
    height: '200px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1a202c'
  },
  description: {
    fontSize: '0.95rem',
    color: '#4a5568',
    marginBottom: '12px',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    lineHeight: '1.4',
    minHeight: '60px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    borderTop: '1px solid #e2e8f0',
    paddingTop: '12px'
  },
  price: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#2d3748'
  },
  editInput: {
    fontSize: '1.2rem',
    padding: '6px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    width: '80px'
  },
  saveBtn: {
    background: '#48bb78',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    cursor: 'pointer'
  },
  editBtn: {
    background: '#3182ce',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    cursor: 'pointer'
  },
  deleteBtn: {
    background: '#e53e3e',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    cursor: 'pointer'
  },
  cartBtn: {
    background: '#805ad5',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    cursor: 'pointer'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    margin: '30px 0'
  },
  pageBtn: {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#4299e1',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '600'
  }
};

export default Product;
