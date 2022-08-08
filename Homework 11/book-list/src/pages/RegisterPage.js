import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase/firebase';

export default function RegisterPage({ user }) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if(user != null) {
      navigate('/');
    }
  });

  async function onRegister(e) {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
      navigate('/login');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='container mt-5'>
      <div className='card p-5'>
        <h1>Register</h1>
        <hr className="mb-5" />
        <form onSubmit={onRegister}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <div className='d-grid'>
            <button className='btn btn-secondary' type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
