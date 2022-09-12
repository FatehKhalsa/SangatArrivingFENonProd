import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { get } from 'lodash';


const RenderAsthans = (props) => {

    const userInfo = get(props, 'sangatValue', {});

    const {user_goingToAsthan} = userInfo;

    const setSangatAsthan = (e, value) =>{
         props.setAsthan(e, value);
    }
    return(
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black', borderColor: user_goingToAsthan===""? 'red':"" }}>
                 {user_goingToAsthan===""?"Select Asthan": user_goingToAsthan}
             </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Surrey")}>Surrey</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Edmonton")}>Edmonton</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Calgary")}>Calgary</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Toronto")}>Toronto</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "France")}>France</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Italy")}>Italy</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Malaysia")}>Malaysia</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Australia")}>Australia</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "New Zealand")}>New Zealand</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Fresno")}>Fresno</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Indiana")}>Indiana</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "New York")}>New York</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Michigan")}>Michigan</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Walsall")}>Walsall</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setSangatAsthan(e, "Bochum Germany")}>Bochum Germany</Dropdown.Item>

              </Dropdown.Menu>
           </Dropdown>
    )

}

export default RenderAsthans;