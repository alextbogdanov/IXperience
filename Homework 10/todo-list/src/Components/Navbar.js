import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../Firebase/Firebase';

export default function Navbar({ user }) {
  const navigate = useNavigate();

  async function onSignout() {
    try {
      await signOut(auth);
      navigate('/login');
    } catch(err) {
      console.log(err);
    }
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
            Logout
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