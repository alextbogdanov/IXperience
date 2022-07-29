import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase/firebase';

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
        <Route path="/" element={<BooksPage user={user} />} />
        <Route path="/login" element={<LoginPage user={user} />} />
        <Route path="/register" element={<RegisterPage user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;