import React from 'react';
import Home from './components/index';
import Users from './components/user';
import Sarava from './components/sarava';
import LoginPage from './components/login';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null,
        isAdmin: false
    };
}

  componentDidMount(){

  }

  logout(){

  }

  render(){

    const {currentUser, isAdmin} = this.state; 

  return (
    <Router history={createBrowserHistory}>
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a> */}
            <Link to="/Home" className="navbar-brand">Home</Link>
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
          <Route path="/" exact component={LoginPage} />
          <Route path="/Home" exact component={Home} />
          <Route path="/User" component={Users} />
          <Route path="/create" component={Sarava} />
        </div>
    </Router>
  );
}
}

export default App;
