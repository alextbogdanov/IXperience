import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase/firebase';

import RequireAuth from './components/auth/RequireAuth';
import RequireNoAuth from './components/auth/RequireNoAuth';

import Navbar from './components/Navbar';

import BooksPage from './pages/BooksPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={
          <RequireAuth user={user} >
            <BooksPage />
          </RequireAuth>
        } />
        <Route path="/login" element={
          <RequireNoAuth user={user}>
            <LoginPage />
          </RequireNoAuth>
        } />
        <Route path="/register" element={
          <RequireNoAuth user={user}>
            <RegisterPage />
          </RequireNoAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;