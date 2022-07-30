import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../Firebase/Firebase';

export default function RegisterPage({ user }) {
	const navigate = useNavigate();

	useEffect(() => {
		if(user != null) {
			navigate('/');
		}
	});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function onRegister(e) {
		e.preventDefault();

		try {
			await createUserWithEmailAndPassword(auth, email, password);
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
