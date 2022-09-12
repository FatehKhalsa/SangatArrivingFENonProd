import React from 'react';
import Home from './components/index';
import Users from './components/users';
import Saravas from './components/saravas';
import LoginPage from './components/login';
import Asthans from './components/asthans/index';
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from './components/PrivateRoute';
import { createBrowserHistory } from 'history';
import { authenticationService } from './userAuthMocks';
import BochumGermany from './components/asthans/BochumGermany';
import CalgaryAB from './components/asthans/CalgaryAB';
import MeetingBabaJi from './components/helper/meetingBabaji';
import SangatArriving from './components/asthans/FresnoCA/FresnoCASangatArriving';
import EdmontonAB from './components/asthans/EdmontonAB';
import IndianaIN from './components/asthans/IndianaIN';
import Italy from './components/asthans/Italy';
import Malaysia from './components/asthans/Malaysia';
import MelbourneAus from './components/asthans/MelbourneAus';
import MichiganDT from './components/asthans/MichiganDT';
import FresnoCA from './components/asthans/FresnoCA/index';
import FresnoHost from './components/asthans/FresnoCA/Fresno';
import NewZealand from './components/asthans/NewZealand';
import ParisFrance from './components/asthans/ParisFrance';
import SurreyBC from './components/asthans/SurreyBC';
import TorontoON from './components/asthans/TorontoON';
import WalsallUK from './components/asthans/WalsallUK';
import TaxiReport from './components/reporting/TaxiReport';
import SangatReport from './components/reporting/SangatReport';
import UserTravelInfoLookUp from './components/modals/userTravelInfoLookUp';




import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './AppScss.scss';
import NewYorkNYC from './components/asthans/NewYorkNY';

let history = createBrowserHistory();

const Role = localStorage.getItem('userRole');

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
        <div style={{display: "flex", justifyContent: "space-between"}}>
          {Role==='ROLE_ADMIN' &&
            <div style={{border: '1px solid black', padding: '10px', background: 'lightblue', borderRadius: '10px', width: '100px'}}><Link to="/Home">Home</Link></div>
          }
           <button onClick={this.logout} className="nav-item nav-link btn btn-danger">Logout</button>
           </div>
          }
          <br/>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute path="/Home" exact component={Home} />
          <PrivateRoute path="/Users" component={Users} />
          <PrivateRoute path="/Saravas" component={Saravas} />
          <PrivateRoute path="/Asthans" exact component={Asthans} />
          <PrivateRoute path="/Asthans/MeetingBabaJi" exact component={MeetingBabaJi}/>
          <PrivateRoute path="/Asthans/BochumGermany" exact component={BochumGermany} />
          <PrivateRoute path="/Asthans/SurreyCanada" exact component={SurreyBC} />
          <PrivateRoute path="/Asthans/EdmontonCanada" exact component={EdmontonAB} />
          <PrivateRoute path="/Asthans/CalgaryCanada" exact component={CalgaryAB} />
          <PrivateRoute path="/Asthans/TorontoCanada" exact component={TorontoON} />
          <PrivateRoute path="/Asthans/FresnoUSA" exact component={FresnoCA} />
          <PrivateRoute path="/Asthans/FresnoUSA/Host" exact component={FresnoHost} />
          <PrivateRoute path="/Asthans/FresnoUSA/SangatAriving" exact component={SangatArriving} />
          <PrivateRoute path="/Asthans/IndianaUSA" exact component={IndianaIN} />
          <PrivateRoute path="/Asthans/MichiganUSA" exact component={MichiganDT} />
          <PrivateRoute path="/Asthans/NewYorkUSA" exact component={NewYorkNYC} />
          <PrivateRoute path="/Asthans/WalsallUK" exact component={WalsallUK} />
          <PrivateRoute path="/Asthans/ParisFrance" exact component={ParisFrance} />
          <PrivateRoute path="/Asthans/Italy" exact component={Italy} />
          <PrivateRoute path="/Asthans/Malaysia" exact component={Malaysia} />
          <PrivateRoute path="/Asthans/MelbourneAus" exact component={MelbourneAus} />
          <PrivateRoute path="/Asthans/NewZealand" exact component={NewZealand} />
          <PrivateRoute path="/reporting/taxiReport" exact component={TaxiReport} />
          <PrivateRoute path="/reporting/SangatReport" exact component={SangatReport}/>
          <PrivateRoute path="/userTravelInfo" exact component={UserTravelInfoLookUp}/>
        </div>
    </Router>
  );
}
}

export default App;
