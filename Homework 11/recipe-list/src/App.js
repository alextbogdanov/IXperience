import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

import RequiresAuth from './components/auth/RequiresAuth';
import RequiresNotAuth from './components/auth/RequiresNotAuth';
import RecipesPage from './pages/RecipesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [])

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={
          <RequiresAuth user={user}>
            <RecipesPage />
          </RequiresAuth>
        } />
        <Route path="/login" element={
          <RequiresNotAuth user={user}>
            <LoginPage />
          </RequiresNotAuth>
        } />
        <Route path="/register" element={
          <RequiresNotAuth user={user}>
            <RegisterPage />
          </RequiresNotAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
