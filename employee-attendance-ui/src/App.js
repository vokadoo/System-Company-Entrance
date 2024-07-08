// src/App.js
import React, { useState, useEffect } from 'react';
import Auth from './components/auth.js';
import Attendance from './components/attendance.js';
import { auth } from './firebase.js';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {user ? <Attendance /> : <Auth />}
    </div>
  );
}

export default App;
