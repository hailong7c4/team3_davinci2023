import './App.css';
import React, {useRef} from 'react';

import SignUpForm from './SignUpForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">SignUpForm</Link></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/">
                    <SignUpForm />
                </Route>
            </Routes>
        </Router>
  );
}

export default App;
