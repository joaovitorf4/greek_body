import './Login.css';
// import React, { useState } from 'react';

function Login() {

  return (
    <div className='Login'>
      <main>
        <div className="">
          <form>
            <h1>Login</h1>
            <div>
                <label>
                  Username
                </label>
                <input
                  type="text"
                  name="user"
                  required
                />
            </div>
            <div>
                <label>
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  required
                />
            </div>
            <button type="submit" className="btn-result">Login</button>
            <p>Doesnt have a account? Create it here</p>
            <button type="submit" className="btn-result">Sign in</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
