// src/App.js
import React from 'react';
import Auth from './components/auth';
import Attendance from './components/attendance';
import './App.css';

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div className="App">
      <div className="container">
        {user ? <Attendance user={user} /> : <Auth setUser={setUser} />}
      </div>
    </div>
  );
}

export default App;
