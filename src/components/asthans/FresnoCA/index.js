import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { cardStyling } from '../../helper/sharedStyling';






const FresnoCA = () => {

    const history = useHistory();

    const routeToPage = (route) => {
        history.push(`/${route}`)
    }


    return(
        <>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card" style={{...cardStyling}} onClick={e=>routeToPage('Asthans/FresnoUSA/Host')}>
                <div className="card-body">Host</div>
            </div>
            <div className="card" style={{...cardStyling}} onClick={e=>routeToPage('Asthans/FresnoUSA/SangatAriving')}>
                <div className="card-body">Sangat Arriving</div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card" style={{...cardStyling, height: '350px', marginTop: '1%'}} onClick={e=>routeToPage('Asthans/MeetingBabaJi')}>
             <div className="card-body">Meeting Babaji</div>
         </div>
        </div>
     </>
        )
    }



export default FresnoCA;