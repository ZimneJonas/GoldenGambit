//src\pages\Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      console.log('User signed in anonymously');
      navigate('/');
    } catch (error) {
      console.error("Error signing in anonymously:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up with email and password');
      navigate('/');
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in with email and password');
      navigate('/');
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleGuestLogin}>Continue as Guest</button>
      {}
    </div>
  );
  
}

export default Login;
