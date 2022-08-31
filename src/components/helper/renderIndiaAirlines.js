import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { get } from 'lodash';
import {AirportNames} from '../../constants';


const RenderAirlinesDelhi = (props) => {


    const userInfo = get(props, 'sangatValue', {});

    const {user_arrivingFlightName} = userInfo;


    const setArrivingFlightName = (e, value) =>{
         props.setAirport(e, value);
    }


    return(
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black', borderColor: user_arrivingFlightName===""? 'red':"" }}>
                 {user_arrivingFlightName===""?"Select Arriving Flight": user_arrivingFlightName}
             </Dropdown.Toggle>
              <Dropdown.Menu style={{height: '300px', overflowY: "scroll"}}>
                 {AirportNames.map(airportName => {
                     return(
                     <Dropdown.Item onClick={(e)=>setArrivingFlightName(e, airportName)}>{airportName}</Dropdown.Item>
                     )})}
              </Dropdown.Menu>
           </Dropdown>
    )

}

export default RenderAirlinesDelhi;