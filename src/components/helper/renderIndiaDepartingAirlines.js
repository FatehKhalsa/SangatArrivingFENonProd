import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { get } from 'lodash';
import {AirLineNames, INDIA_AIRPORT_LIST} from '../../constants';


const RenderAirlinesDelhiDeparting = (props) => {


    const userInfo = get(props, 'sangatValue', {});

    const {user_departingFlightName} = userInfo;


    const setDepartingFlightName = (e, value) =>{
         props.setAirport(e, value);
    }


    return(
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black', borderColor: user_departingFlightName===""? 'red':"" }}>
                 {user_departingFlightName===""?"Select Departing Flight": user_departingFlightName}
             </Dropdown.Toggle>
              <Dropdown.Menu style={{height: '300px', overflowY: "scroll"}}>
                 {INDIA_AIRPORT_LIST.map((airportName, index) => {
                     return(
                     <Dropdown.Item key={index} onClick={(e)=>setDepartingFlightName(e, airportName)}>{airportName}</Dropdown.Item>
                     )})}
              </Dropdown.Menu>
           </Dropdown>
    )

}

export default RenderAirlinesDelhiDeparting;