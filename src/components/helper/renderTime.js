import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { get } from 'lodash';


const RenderTime = (props) => {

    const userInfo = get(props, 'sangatValue', {});

    const {user_goingToAsthan} = userInfo;

    const setSangatAsthan = (e, value) =>{
         props.setAsthan(e, value);
    }
    return(
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black', borderColor: user_goingToAsthan===""? 'red':"" }}>
                 {user_goingToAsthan===""?"Select Time": user_goingToAsthan}
             </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Surrey")}>00</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
    )

}

export default RenderTime;