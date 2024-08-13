import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      });

      // Save the token to localStorage or state
      localStorage.setItem('token', response.data.token);

      alert('Login successful!');
      // Redirect to another page if needed, e.g., home page
      // window.location.href = '/home';
    } catch (error) {
      alert('Login failed! Please check your credentials and try again.');
    }
  };

  return (
    <div className='Login'>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password" // Change to "password" for security
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-result">Login</button>
            <p>Don't have an account? Create it here</p>
            <button type="button" className="btn-result" onClick={() => window.location.href = '/register'}>
              Sign in
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
