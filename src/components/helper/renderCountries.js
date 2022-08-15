import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { get } from 'lodash';


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
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "USA")}>USA</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "Canada")}>Canada</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "UK")}>UK</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "Germany")}>Germany</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "France")}>France</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "Italy")}>Italy</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "Malaysia")}>Malaysia</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "Australia")}>Australia</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "New Zealand")}>New Zealand</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setCountrySelection(e, "India")}>India</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
    )

}

export default RenderCountries;