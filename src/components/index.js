import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import {cardStyling} from './helper/cardStyling';






const Home = () => {

    const history = useHistory();

    const routeToPage = (route) => {
        history.push(`/${route}`)
    }


    return(
        <>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card" style={{...cardStyling}} onClick={e=>routeToPage('Users')}>
                <div className="card-body">Sangat</div>
            </div>
            <div className="card" style={{...cardStyling}} onClick={e=>routeToPage('Saravas')}>
                <div className="card-body">Sarava</div>
            </div>
        </div>
         <div className="card" style={{...cardStyling, height: '200px', margin: '2% 30%'}} onClick={e=>routeToPage('Asthans')}>
         <div className="card-body">Asthans</div>
     </div>
     </>
        )
    }



export default Home;