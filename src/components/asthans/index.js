import React from 'react';
import { useHistory } from "react-router-dom";
import {cardStylingAsthans} from '../helper/cardStyling';



const Asthans = () =>{

    const history = useHistory();

    const routeToPage = (route) => {
        history.push(`/${route}`)
    }

    return (
        <>
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/SurreyCanada')}>
                <div className="card-body">Surrey Canada</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/EdmontonCanada')}>
                <div className="card-body">Edmonton Canada</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/CalgaryCanada')}>
                <div className="card-body">Calgary Canada</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/TorontoCanada')}>
                <div className="card-body">Toronto Canada</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/FresnoUSA')}>
                <div className="card-body">Fresno USA</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/IndianaUSA')}>
                <div className="card-body">Indiana USA</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/MichiganUSA')}>
                <div className="card-body">Michigan USA</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/NewYorkUSA')}>
                <div className="card-body">New York USA</div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/WalsallUK')}>
                <div className="card-body">Walsall UK</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/ParisFrance')}>
                <div className="card-body">Paris France</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/BochumGermany')}>
                <div className="card-body">Bochum Germany</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/Italy')}>
                <div className="card-body">Italy</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/Malaysia')}>
                <div className="card-body">Malaysia</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/MelbourneAus')}>
                <div className="card-body">Melbourne Australia</div>
            </div>
            <div className="card" style={{...cardStylingAsthans}} onClick={e=>routeToPage('Asthans/NewZealand')}>
                <div className="card-body">Papamoa New Zealand</div>
            </div>
        </div>    
        </>
    )
}

export default Asthans;