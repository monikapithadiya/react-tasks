import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter Value: {count}</h1>
      <button onClick={handleDecrement} style={{ marginRight: '10px' }}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterApp;
