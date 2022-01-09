import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import LogIn from './LogIn';
function App() {
  return (
    <div className="App">
    <Router>
          <Routes>
            <Route path="/" element={<LogIn/>} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
