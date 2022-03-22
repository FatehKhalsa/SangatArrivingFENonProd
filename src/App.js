import React from 'react';
import Home from './components/index';
import Users from './components/user';
import Sarava from './components/sarava';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';



function App() {
  return (
    <Router>
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a> */}
            <Link to="/" className="navbar-brand">Home</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/User" className="nav-link">Users</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Sarava</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/User" component={Users} />
          <Route path="/create" component={Sarava} />
        </div>
    </Router>
  );
}

export default App;
