import React from 'react';
import Home from './components/index';
import Users from './components/users';
import Saravas from './components/saravas';
import LoginPage from './components/login';
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from './components/PrivateRoute';
import { createBrowserHistory } from 'history';
import { authenticationService } from './userAuthMocks';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './AppScss.scss';

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
          <nav className="navbar navbar-expand-lg navbar-light" style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#bf88b5', borderRadius:'10px'}}>
              <Link to="/Home" className="navbar-brand btn-default">Home</Link>
              <button onClick={this.logout} className="nav-item nav-link btn btn-danger">Logout</button>
          </nav>
          }
          <br/>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute path="/Home" exact component={Home} />
          <PrivateRoute path="/Users" component={Users} />
          <PrivateRoute path="/Saravas" component={Saravas} />
        </div>
    </Router>
  );
}
}

export default App;
