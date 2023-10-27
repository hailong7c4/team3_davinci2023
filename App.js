import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, withRouter} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
      <h1> Carpool Commuter</h1>
      <SignUpForm />
      <Link to="/option"> <button>Log in</button> </Link>
        <Routes>
          <Route exact path = "/option" element = {<Option/>}/> 
        </Routes>
      </header>
    </div>
    </Router>
  );
}

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
        <p>{message}</p>
      </div>
  );
};

function Option() {
  return (
    <div>
      <p>
        <a
          className="App-link"
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pick me up!
        </a>
      </p>
        <a
          className="App-link"
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Be a driver
        </a>
    </div>
  );
}

export default App;
