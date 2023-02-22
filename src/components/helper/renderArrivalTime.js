import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { get } from 'lodash';


const RenderTime = (props) => {

    const userInfo = get(props, 'sangatValue', {});

    const {user_arrivingFlightTime} = userInfo;

    const setSangatAsthan = (e, value) =>{
         props.setAsthan(e, value);
    }
    return(
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black', borderColor: user_arrivingFlightTime===""? 'red':"" }}>
                 {user_arrivingFlightTime===""?"Select Time": user_arrivingFlightTime}
             </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Surrey")}>00</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Surrey")}>01</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
    )

}

export default RenderTime;