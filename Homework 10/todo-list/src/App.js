import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './Firebase/Firebase';

import TasksPage from './Pages/TasksPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Navbar from './Components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<TasksPage user={user} />} />
        <Route path="/login" element={<LoginPage user={user} />} />
        <Route path="/register" element={<RegisterPage user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
