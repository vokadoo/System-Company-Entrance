// src/components/Auth.js
import React, { useState } from 'react';


function Auth({ setUser }) {
  const [name, setName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUser(name.trim());
    }
  };

  return (
    <div>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default Auth;
