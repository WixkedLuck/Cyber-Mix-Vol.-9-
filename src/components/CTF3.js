import React, { useState } from 'react';

const UnionBasedSQLInjection = () => {
  const [productId, setProductId] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  // Simulated database
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 }
  ];

  const secretTable = [
    { id: 1, username: 'admin', password: 'supersecret' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
   
    
    // Check for UNION-based injection
    if (productId.toLowerCase().includes('union')) {
      const injectedQuery = productId.toLowerCase();
      if (injectedQuery.includes('username') && injectedQuery.includes('password')) {
        setResult(JSON.stringify(secretTable));
        setMessage("Congratulations! You found the flag! flag 3: w2zafuni0n7ghk9");
      } else {
        setResult("Injection detected, but no sensitive data accessed.");
      }
    } else {
      // Normal query simulation
      const product = products.find(p => p.id === parseInt(productId));
      setResult(product ? JSON.stringify(product) : "Product not found");
    }
  };
  const toggleHint = () => {
    setShowHint(!showHint);
  };
  return (
    <div>
        <p>Challenge 3:</p>
    <h5>Product Search</h5>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Enter product ID"
      />
      <button type="submit">Search</button>
    </form>
    <p>Result: {result}</p>
    {message && <p>{message}</p>}
    
    <button onClick={toggleHint}>
      {showHint ? 'Hide Hint' : 'Show Hint'}
    </button>
    
    {showHint && (
      <div>
        <p>Hint 1: The application is vulnerable to UNION-based SQL injection.</p>
        <p>Hint 2: Try to UNION your query with a SELECT statement targeting a table with user credentials.</p>
        <p>Hint 3: The secret table has columns for 'username' and 'password'.</p>
      </div>
    )}
  </div>
);
};

export default UnionBasedSQLInjection;