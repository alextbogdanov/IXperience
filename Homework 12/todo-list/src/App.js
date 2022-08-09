import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './Firebase/Firebase';

import RequireAuth from './Components/Auth/RequireAuth';
import RequireNotAuth from './Components/Auth/RequireNotAuth';
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
        <Route path="/" element={
          <RequireAuth user={user}>
            <TasksPage />
          </RequireAuth>
        } />
        <Route path="/login" element={
          <RequireNotAuth user={user}>
            <LoginPage />
          </RequireNotAuth>
        } />
        <Route path="/register" element={
          <RequireNotAuth user={user}>
            <RegisterPage />
          </RequireNotAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
