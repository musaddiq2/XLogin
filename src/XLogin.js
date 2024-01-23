import React, { useState } from 'react';

const XLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setMessage('Please enter both username and password.');
    } else if (username === 'user' && password === 'password') {
      setMessage(`Welcome, ${username}`);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-form">
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default XLogin;
