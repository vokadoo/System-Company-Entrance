// src/App.js
import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Attendance from './components/Attendance';
import { auth } from './firebase';

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
