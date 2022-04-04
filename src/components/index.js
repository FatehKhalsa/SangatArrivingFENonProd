import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";



const cardStyling = {
    width: '500px',
    height: '400px',
    border: '1px solid',
    borderRadius: '10px',
    backgroundColor: '#A991A1',
    boxShadow: '14px -2px 6px 2px grey'
}



const Home = () => {

    const history = useHistory();
  
    const routeUserPage = () => {
        history.push("/Users")
    }

    const routeSaravaPage = () => {
        history.push("/Saravas")
    }


    return(
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card" style={{...cardStyling}} onClick={routeUserPage}>
                <div className="card-body">Sangat</div>
            </div>
            <div className="card" style={{...cardStyling}} onClick={routeSaravaPage}>
                <div className="card-body">Sarava</div>
            </div>
        </div>
        )
    }



export default Home;