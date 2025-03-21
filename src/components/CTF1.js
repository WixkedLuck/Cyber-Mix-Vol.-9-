import React, { useState } from 'react';

const SQLInjectionChallenge = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    const simulatedQuery = `SELECT * FROM users WHERE username = 'Admin1' AND password = '${password}'`;

    // Check for basic SQL injection
    if (simulatedQuery.includes("' OR '1'='1'")) {
      setMessage("Congratulations You found the flag! Flag1:4k9pl8dn5ag2");
    } else if (password === "S3cret123") {
      setMessage("Login successful, but no flag here!");
    } else {
      setMessage("Login failed. Try again.");
    }
  };
  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value="Admin1"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}


<br></br>
      <button onClick={toggleHint} Style="magin-top:3rem;">
      {showHint ? 'Hide Hint' : 'Show Hint'}
    </button>
    
    {showHint && (
      <div>
        <p>Hint 1: Watch the video for a basic injection.</p>
        <p>Hint 2: Apply this injection into the password column instead of the username column.</p>
        
      </div>
    )}
    </div>
  );
};

export default SQLInjectionChallenge;