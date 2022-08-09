import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase/firebase';

import Spinner from '../components/Spinner';

export default function LoginPage({ user }) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function onLogin(event) {
    event.preventDefault();

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, emailInput, passwordInput);
      navigate('/');
    } catch(err) {
      console.log(err);
    }
    setLoading(false);
  }
  
  return (
    <div className='container mt-5'>
      <div className='card p-5'>
        <h1>Login</h1>
        <hr className="mb-5" />
        <form onSubmit={onLogin}>
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
              {
                loading ?
                <Spinner />
                :
                <>
                  Login
                </>
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
