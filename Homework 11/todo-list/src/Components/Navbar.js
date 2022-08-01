import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../Firebase/Firebase';

import Spinner from './Spinner';

export default function Navbar({ user }) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function onSignout() {
    setLoading(true);
    try {
      await signOut(auth);
      navigate('/login');
    } catch(err) {
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <ul className="nav bg-light p-3">
      { user ?
        <>
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-secondary" onClick={onSignout}>
            {loading ?
              <Spinner /> :
              'Logout'
            }
          </button>
        </li>
        </>
        :
        <>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
        </>
      }
    </ul>
  );
}