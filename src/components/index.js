import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { cardStyling } from './helper/sharedStyling';






const Home = () => {

    const history = useHistory();

    const routeToPage = (route) => {
        history.push(`/${route}`)
    }


    return(
        <>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card" style={{...cardStyling}} onClick={e=>routeToPage('Users')}>
                <div className="card-body">All Sangat List</div>
            </div>
            <div className="card" style={{...cardStyling}} onClick={e=>routeToPage('Saravas')}>
                <div className="card-body">Gurpurab 2022-Arriving Sangat List</div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card" style={{...cardStyling, height: '350px', marginTop: '1%'}} onClick={e=>routeToPage('Asthans')}>
             <div className="card-body">Asthans</div>
         </div>
         <div className="card" style={{...cardStyling,  height: '350px', marginTop: '1%'}}>
             <div className="card-body">Barsi 2023</div>
        </div>
        </div>
     </>
        )
    }



export default Home;