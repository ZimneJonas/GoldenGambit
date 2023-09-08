import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase'; 
import { useState, useEffect } from 'react';
import Game from './pages/Game';
import SetupBoard from './pages/SetupBoard';
import Menu from './pages/Menu';
import Login from './pages/Login.jsx';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isUserLoggedIn ?<Menu /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setupWhite" element={isUserLoggedIn ? <SetupBoard color='white'/> : <Navigate to="/login" replace />} />
        <Route path="/setupBlack" element={isUserLoggedIn ? <SetupBoard color='black'/> : <Navigate to="/login" replace />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}
export default App;
