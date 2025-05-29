import React, { useState, useEffect } from 'react';

function Product() {
  const [value, setValue] = useState([]);
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(0);
 
  function fetchData() {
    fetch("http://localhost:3000/Products")
      .then((response) => response.json())
      .then((data) => {
         fetchData();
        setValue(data);
      })
      .catch((error) => console.log(error));
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/Products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      if (!res.ok) throw new Error('Delete failed');
      alert("Deleted successfully");
      fetchData();
    })
    .catch((err) => console.log(err));
  }

  function handleEdit(id, price) {
    setId(id);
    setPrice(price.toString());
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handleUpdate() {
    fetch(`http://localhost:3000/Products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: Number(price) }),
    })
    .then((res) => res.json())
    .then(() => {
      alert("Price updated successfully");
      fetchData();
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
      <div style={{display: 'flex', gap: '10px', padding: '15px', backgroundColor: '#f5f7fa', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          style={{padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px', flex: 1}}
          placeholder="Enter new price"
        />
        <button 
          onClick={handleUpdate}
          style={{padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600'}}
        >
          Update Price
        </button>
      </div>

      <h3 style={{textAlign: 'center', color: '#2c3e50', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee'}}>Product List</h3>

      <div style={{overflowX: 'auto'}}>
        <table style={{width: '100%', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{backgroundColor: '#f8f9fa'}}>
              <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>ID</th>
              <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Image</th>
              <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Title</th>
              <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Category</th>
              <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Price</th>
              <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {value.map((el) => (
              <tr key={el.id} style={{borderBottom: '1px solid #eee', '&:hover': {backgroundColor: '#f9f9f9'}}}>
                <td style={{padding: '12px 15px', fontWeight: '500'}}>{el.id}</td>
                <td style={{padding: '8px 15px'}}>
                  <div style={{height: '60px', width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', borderRadius: '4px'}}>
                    <img 
                      src={el.image} 
                      alt={el.title} 
                      style={{maxHeight: '50px', maxWidth: '50px', objectFit: 'contain'}}
                    />
                  </div>
                </td>
                <td style={{padding: '12px 15px', maxWidth: '200px'}}>
                  <div style={{fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    {el.title}
                  </div>
                </td>
                <td style={{padding: '12px 15px'}}>
                  <span style={{backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '500'}}>
                    {el.category}
                  </span>
                </td>
                <td style={{padding: '12px 15px', fontWeight: '600', color: '#15803d'}}>${el.price}</td>
                <td style={{padding: '12px 15px'}}>
                  <div style={{display: 'flex', gap: '8px'}}>
                    <button 
                      onClick={() => handleEdit(el.id, el.price)}
                      style={{padding: '6px 12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px'}}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(el.id)}
                      style={{padding: '6px 12px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px'}}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;