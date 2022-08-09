import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../Firebase/Firebase';

import Spinner from '../Components/Spinner';
import Alert from '../Components/Alert';

export default function LoginPage({ user }) {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

	async function onLogin(e) {
		e.preventDefault();

    setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate('/');
		} catch(err) {
			setError(err.message);
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
              {loading ?
                <Spinner /> :
                'Login'
              }
            </button>
          </div>
        </form>
        {
          error ?
            <Alert className='mt-4'>
              {error}
            </Alert>
          :
          <></>
        }
      </div>
    </div>
  )
}
