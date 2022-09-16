import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { get } from 'lodash';
import {countries} from '../../constants';


const RenderCountries = (props) => {

    const userInfo = get(props, 'sangatValue', {});

    const {user_country} = userInfo;

    const setCountrySelection = (e, value) =>{
         props.setCountry(e, value);
    }
    return(
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black', borderColor: user_country===""? 'red':"" }}>
                 {user_country===""?"Select Country": user_country}
             </Dropdown.Toggle>
             <Dropdown.Menu style={{height: '300px', overflowY: "scroll"}}>
                 {countries.map((country, index) => {
                     return(
                     <Dropdown.Item key={index} onClick={(e)=>setCountrySelection(e, country)}>{country}</Dropdown.Item>
                     )})}
              </Dropdown.Menu>
           </Dropdown>
    )

}

export default RenderCountries;