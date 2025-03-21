import React, { useState, useEffect } from 'react';

const TimedSQLInjectionChallenge = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTime, setSearchTime] = useState(0);
  const [message, setMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const simulateSearch = (term) => {
    const start = Date.now();
    
    // Simulate a time delay for specific inputs
    if (term.toLowerCase().includes("sleep(5)") || term.toLowerCase().includes("WAITFOR DELAY ")) {
      setTimeout(() => {
        setSearchTime((Date.now() - start) / 1000);
      }, 5000);
    } else {
      setTimeout(() => {
        setSearchTime((Date.now() - start) / 1000);
      }, 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    simulateSearch(searchTerm);
  };

  useEffect(() => {
    if (searchTime > 4.9) {
      setMessage("Congratulations! You found the flag! flag2: t1m3f0urs0luti0n");
    } else {
      setMessage("");
    }
  }, [searchTime]);
  const toggleHint = () => {
    setShowHint(!showHint);
  };
  return (
    <div>
      <p>Challenge 2:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search employees..."
        />
        <button type="submit">Search</button>
      </form>
      <p>Search time: {searchTime.toFixed(2)} seconds</p>
      {message && <p>{message}</p>}

      <button onClick={toggleHint}>
      {showHint ? 'Hide Hint' : 'Show Hint'}
    </button>
    
    {showHint && (
      <div>
        <p>Hint 1: The application measures and displays the search time for each query.</p>
        <p>Hint 2: Look for ways to introduce a deliberate delay in the query execution. </p>
        <p>Hint 3: SQL has functions that can cause the database to pause. In our simulation, we're looking for specific keywords.</p>
        <p>Hint 4: Try including 'sleep' or 'waitfor' in your input. These are common SQL delay functions.</p>
        <p>Hint 5: The challenge is triggered when the search time exceeds a certain threshold (in our case, 4.9 seconds).</p>
      </div>
    )}
    </div>
  );
};

export default TimedSQLInjectionChallenge;