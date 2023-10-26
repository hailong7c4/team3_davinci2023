// client/src/SignUpForm.js

import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signup', formData);
      setMessage('User registered successfully. Token: ' + response.data.token);
    } catch (error) {
      setMessage('Error: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="UTORid" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      </form>
      <a
        className="App-link"
        href="https://www.google.com/maps"
        target="_blank"
        rel="noopener noreferrer">
          Log in
      </a> 
      <p>{message}</p>
    </div>
  );
};

export default SignUpForm;
