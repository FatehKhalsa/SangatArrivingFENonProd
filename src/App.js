import React from 'react';
import Home from './components/index';
import Users from './components/user';
import Sarava from './components/sarava';
import LoginPage from './components/login';
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from './components/PrivateRoute';
import { createBrowserHistory } from 'history';
import { authenticationService } from './userAuthMocks';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

let history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null,
        isAdmin: false
    };
}

  componentDidMount(){
    authenticationService.currentUser.subscribe(x => this.setState({
      currentUser: x
  }));
  }

  logout(){
    authenticationService.logout();
    history.push('/login');
  }

  render(){

    const {currentUser, isAdmin} = this.state; 

  return (
    <Router history={createBrowserHistory}>
      <div className="container">
        {currentUser && 
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <a onClick={this.logout} className="nav-item nav-link">Logout</a>
            </div>
          </nav>
          }
          <br/>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute path="/Home" exact component={Home} />
          <PrivateRoute path="/User" component={Users} />
          <PrivateRoute path="/create" component={Sarava} />
        </div>
    </Router>
  );
}
}

export default App;
