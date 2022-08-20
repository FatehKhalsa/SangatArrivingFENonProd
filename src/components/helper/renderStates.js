import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { get } from 'lodash';


const RenderStates = (props) => {

    const userInfo = get(props, 'sangatValue', {});

    const {user_state, user_country} = userInfo;

    const setStateSelection = (e, value) =>{
         props.setState(e, value);
    }
    return(
        <Dropdown style={{paddingTop: '5px'}}>
        <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black', borderColor: user_state===""? 'red':"" }}>
           {user_state===""?"Select State/Province": user_state}
       </Dropdown.Toggle>
       {user_country==="USA" &&
        <Dropdown.Menu style={{overflow: "scroll"}}>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Alabama")}>Alabama</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Alaska")}>Alaska</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Arkansas")}>Arkansas</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Arizona")}>Arizona</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "California")}>California</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Colorado")}>Colorado</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Connecticut")}>Connecticut</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Delaware")}>Delaware</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Florida")}>Florida</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Georgia")}>Georgia</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Hawaii")}>Hawaii</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Idaho")}>Idaho</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Illinois")}>Illinois</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Indiana")}>Indiana</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Iowa")}>Iowa</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Kansas")}>Kansas</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Kentucy")}>Kentucy</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Louisana")}>Louisana</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Maine")}>Maine</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Maryland")}>Maryland</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Massachusetts")}>Massachusetts</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Michigan")}>Michigan</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Minnesota")}>Minnesota</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Mississppi")}>Mississppi</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Missouri")}>Missouri</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Montana")}>Montana</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Nebraska")}>Nebraska</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Nevada")}>Nevada</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "New Hamishire")}>New Hamishire</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "New Jersey")}>New Jersey</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "New Mexico")}>New Mexico</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "New York")}>New York</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "North Carolina")}>North Carolina</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "North Dakota")}>North Dakota</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Ohio")}>Ohio</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Oklahoma")}>Oklahoma</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Oregon")}>Oregon</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Pennsylvania")}>Pennsylvania</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Rhode Island")}>Rhode Island</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "South Carolina")}>South Carolina</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "South Dakota")}>South Dakota</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Tennessee")}>Tennessee</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Texas")}>Texas</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Utah")}>Utah</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Vermont")}>Vermont</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Virginia")}>Virginia</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Washington")}>Washington</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Washington DC")}>Washington DC</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "West Virginia")}>West Virginia</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Wisconsin")}>Wisconsin</Dropdown.Item>
           <Dropdown.Item onClick={(e)=>setStateSelection(e, "Wyoming")}>Wyoming</Dropdown.Item>
        </Dropdown.Menu>
        }
        {user_country==="Canada" &&
          <Dropdown.Menu style={{overflow: "scroll"}}>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "British Columbia")}>British Columbia</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Alberta")}>Alberta</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Yukon")}>Yukon</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Manitoba")}>Manitoba</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Ontario")}>Ontario</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Northwest Territories")}>Northwest Territories</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Saskatchewan")}>Saskatchewan</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "New Brunswick")}>New Brunswick</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Newfoundland")}>Newfoundland</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Labrador")}>Labrador</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Nova Scotia")}>Nova Scotia</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>setStateSelection(e, "Prince Edward Island")}>Prince Edward Island</Dropdown.Item>
        </Dropdown.Menu>
        }
        {user_country!=="USA" && user_country!=="Canada" &&
         <Dropdown.Menu style={{overflow: "scroll"}}>
         <Dropdown.Item onClick={(e)=>setStateSelection(e, "Others")}>Others</Dropdown.Item>
         </Dropdown.Menu>
        }
       </Dropdown>
    )

}

export default RenderStates;