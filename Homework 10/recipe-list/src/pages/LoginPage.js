import React from 'react';

export default function LoginPage() {
  return (
    <div className='container mt-5'>
      <div className='card p-5'>
        <h1>Login</h1>
        <hr className="mb-5" />
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
            />
          </div>
          <div className='d-grid'>
            <button className='btn btn-secondary'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
