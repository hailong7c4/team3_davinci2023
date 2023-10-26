import './App.css';
import React, {useRef} from 'react';

import SignUpForm from './SignUpForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className="App-link"
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
        <SignUpForm />
        </a>
      </header>
    </div>
  );
}

export default App;
