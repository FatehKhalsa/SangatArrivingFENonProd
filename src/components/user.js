import React, { useState } from 'react';
import { get } from 'lodash';
import { Modal, Button, Alert, Dropdown } from 'react-bootstrap';
import {editStyling, inputStyle, floatcontainer, floatchild} from './helper/sharedStyling';
import {HerokuURL} from '../constants';
import Loader from '../helper/loader';
import TimePicker from 'react-time-picker';
import RenderAirlinesDelhi from '../components/helper/renderIndiaAirlines';
import RenderStates from '../components/helper/renderStates';
import RenderAsthans from '../components/helper/renderAsthans';
import RenderAirlinesDelhiDeparting from '../components/helper/renderIndiaDepartingAirlines';
import RenderCountries from '../components/helper/renderCountries';


const User = (props) => {

  const userInfoArray = get(props, 'userSelected', []);

  const userInfo = userInfoArray[0];

  const [value, onChange] = useState('00:00');
  const [valueDeparture, onChangeDeparture] = useState('00:00');
  const [show, setShow] = useState(true);
  const [showDialog, setShowDialong] = useState(false);
  const [isParent, setParent] = useState(false);
  const [hostAddedSuccess, setHostAddedSuccess] = useState(false);
  const [addFamily, setAddFamily] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sangatValue, setSangatValue] = useState({
    user_firstName: userInfo.user_firstName,
    user_middleName: userInfo.user_middleName,
    user_lastName: userInfo.user_lastName,
    user_yearOfBirth:userInfo.user_yearOfBirth,
    user_gender:userInfo.user_gender,
    user_city:userInfo.user_city,
    user_state: userInfo.user_state,
    user_country: userInfo.user_country,
    user_allergy: userInfo.user_allergy,
    user_hasAllergy: false,
    user_phoneNumber: userInfo.user_phoneNumber,
    user_email: userInfo.user_email,
    user_arrivingFlightNumber: userInfo.user_arrivingFlightNumber,
    user_arrivingFlightName: userInfo.user_arrivingFlightName,
    user_arrivingFlightAirport: userInfo.user_arrivingFlightAirport,
    user_arrivingFlightDate: userInfo.user_arrivingFlightDate,
    user_arrivingFlightTime: userInfo.user_arrivingFlightTime,
    user_departingFlightNumber: userInfo.user_departingFlightNumber,
    user_departingFlightName: userInfo.user_departingFlightName,
    user_departingFlightAirport: userInfo.user_departingFlightAirport,
    user_departingFlightDate: userInfo.user_departingFlightDate,
    user_departingFlightTime: userInfo.user_departingFlightTime,
    user_hostedby: "",
    user_goingToAsthan: userInfo.user_goingToAsthan,
    user_emergencyContact: userInfo.user_emergencyContact,
    user_comments: "",
    user_ride_from_airport: userInfo.user_ride_from_airport,
    user_family_identified: "",
  });

  const handleClose = () => {
    // Add logic for confirmation
    setShowDialong(true);
    setShow(false);
    window.location.reload();
  }
  const handleShow = () => setShow(true);

  const updateSangat = async() => {

    setLoading(true);
    fetch(`${HerokuURL}api/user/update`, {
      method: 'PUT',
      headers: {
        "x-access-token" : localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        sangatValue
      ),
    })
      .then((res) => res.json()).then((status)=>{
        setToastMessage(status.message);
        if(status.message==='Failed to update!'){
          setError(true);
        }
        setHostAddedSuccess(true); 

        setLoading(false); setShow(false);
        window.location.reload();
      })
}

const setSangatFirstName = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_firstName: e.target.value});
}

const setSangatLastName = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_lastName: e.target.value});
}


const setSangatDepartureTime = (value) =>{
  setSangatValue({...sangatValue, user_departingFlightTime: value});
}

const setSangatYearOfBirth = (e) => {
  e.preventDefault();
  const currentDate = new Date();

  const age = calculateAge(e.target.value, currentDate);

  
  setSangatValue({...sangatValue, user_yearOfBirth: e.target.value, user_age: age});
  
}

const calculateAge = (s, date) =>{
  
  const dateSplitted = s.split("-");
  const year = dateSplitted[0];
  const month = dateSplitted[1];
  
  const currentYearSplitted = date.toLocaleDateString().split(" ")[0];
  
  const currentYear = currentYearSplitted.split("/")[2];
  const currentMonth = currentYearSplitted.split("/")[1];

  let age = currentYear - year; 
  
  if(currentMonth<month){
    	age++;
  }
  
  return age;
}

const setSangatGender = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_gender: e.target.value});
}

const setSangatCity = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_city: e.target.value});
}

const setArrivingFlightNumber = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightNumber: e.target.value}) 
}

const setArrivingFlightName = (e, value) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightName: value}) 
}

const setSangatPhoneNumber = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_phoneNumber: e.target.value});
}


const setSangatAsthan = (e, value) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_goingToAsthan: value});
}

const setArrivingFlightAirport = (e, value) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightAirport: value}) 
}

const setArrivingFlightDate = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightDate: e.target.value}) 
}

const setSangatArrivalTime = (e) =>{
  e.preventDefault();
  console.log("hello", e.target.value);
  setSangatValue({...sangatValue, user_arrivingFlightTime: e.target.value});
}

const setDepartingFlightNumber = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightNumber: e.target.value}) 
}

const setDepartingFlightName = (e, value) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightName: value}) 
}

const setDepartingFlightAirport = (e, value) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightAirport: value}) 
}

const setDepartingFlightDate = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightDate: e.target.value}) 
}

const setSangatEmail = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_email: e.target.value});
}

const setSangatEmergencyContact = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_emergencyContact: e.target.value});
}

const setSangatComments = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_comments: e.target.value});
}

const setCountrySelection = (e, value) =>{
  e.preventDefault();
  setSangatValue({...sangatValue, user_country: value});
}

const setStateSelection = (e, value) =>{
  e.preventDefault();
  setSangatValue({...sangatValue, user_state: value});
}


const setUserRideFromAirport = (e, value) =>{
  e.preventDefault();
  let boolCheck = false;
  value==="Yes"?boolCheck=true: boolCheck=false;
  setSangatValue({...sangatValue, user_ride_from_airport: boolCheck})
}

const setTravelingWithFamily = (e, value) =>{
    e.preventDefault();
    if(value==="Yes"){
      setAddFamily(true)
    }
    else{
      setAddFamily(false)
    }
}

const setGroupFamilyUID = (e) =>{
  e.preventDefault();
  setSangatValue({...sangatValue, user_family_identified: e.target.value})
}

const setParentFlag = (e, value) =>{
  e.preventDefault();
  value==="Yes"? setParent(true): setParent(false)
}

const{user_country, user_state, user_arrivingFlightAirport, user_departingFlightAirport, user_ride_from_airport, user_family_identified} = sangatValue

  return (
    <>
     {hostAddedSuccess && <Alert key={'success'} variant={error? 'danger':'success'}>
      {toastMessage}
    </Alert>}
    {loading && <Loader/>}
      <Modal size="lg" show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#f2f2f2' }}>
        <div style={{ ...editStyling }}>
            First Name * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_firstName===""? 'red':"" }}  value ={sangatValue.user_firstName} onChange ={e=>setSangatFirstName(e)}/>
            Middle Name
            <input style={{ ...inputStyle }} value ={sangatValue.user_middleName} onChange ={e=>setSangatMiddletName(e)}/>
            Last Name *
            <input style={{ ...inputStyle, borderColor: sangatValue.user_lastName===""? 'red':""  }}  value ={sangatValue.user_lastName} onChange ={e=>setSangatLastName(e)}/>
            Gender:
            <div style={{...floatcontainer, borderColor:sangatValue.user_gender===""? 'red':""}}>
              <div style={{...floatchild}}>
              <input type="radio" id="Male" name= "genderSelect" style={{...inputStyle}}  value ="Male" onChange ={e=>setSangatGender(e)}  />
              <label for="Male" style={{top:'50%'}}> Male</label></div>
              <div style={{...floatchild}}>
              <input type="radio" id="Female" name= "genderSelect" style={{ ...inputStyle }}  value ="Female" onChange ={e=>setSangatGender(e)} />
              <label for="Female"> Female</label></div>
            </div>
            Date of Birth *
            <input type="date" style={{ ...inputStyle, borderColor: sangatValue.user_yearOfBirth===""? 'red':""  }} value={sangatValue.user_yearOfBirth} onChange ={e=>setSangatYearOfBirth(e)} />
            Country *
            <RenderCountries sangatValue={sangatValue} setCountry={setCountrySelection}/>
           State/Province *
           <RenderStates sangatValue={sangatValue} setState={setStateSelection}/>
          
           {user_country!=='India' &&
           <div>  Closest Asthan *
           <RenderAsthans sangatValue={sangatValue} setAsthan={setSangatAsthan}/>
           </div>
           }
            City * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_city===""? 'red':""  }}  value ={sangatValue.user_city} onChange ={e=>setSangatCity(e)}/>
            Phone Number (Whatsapp) 
            {sangatValue.user_phoneNumber.length<10? <div style={{color: "red"}}>Phone number must be 10 digits</div>: ""}
            <input onkeyup="value=isNaN(parseFloat(value))||value<0||value>9000?1000:value" type="number" style={{ ...inputStyle, borderColor: sangatValue.user_phoneNumber===""? 'red':""  }}  value ={sangatValue.user_phoneNumber} onChange ={e=>setSangatPhoneNumber(e)}/>
            Secondary Contact Number (Reachable phone while travelling) *
            {sangatValue.user_phoneNumber===sangatValue.user_emergencyContact? <div style={{color: "red"}}>Must be different than primary phone number</div>: ""}
            <input type="number" style={{ ...inputStyle }} value={sangatValue.user_emergencyContact} onChange = {e=>setSangatEmergencyContact(e)} /> 
            Email 
            <input type="email" style={{ ...inputStyle}}  value ={sangatValue.user_email} onChange ={e=>setSangatEmail(e)}/>
            Arriving with Family?
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black'}}>
                {addFamily? "Yes": "No"}
             </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setTravelingWithFamily(e, "Yes")}>Yes</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setTravelingWithFamily(e, "No")}>No</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
            <div style={{margin: "10px"}}>===========Arriving Info ============</div>
            Arriving Flight Date
            <input type="date" style={{ ...inputStyle }} value={sangatValue.user_arrivingFlightDate} onChange = {e=>setArrivingFlightDate(e)} />
            Arriving Flight Time
            <input type="time" style={{ ...inputStyle }} onChange={e=>setSangatArrivalTime(e)} value={sangatValue.user_arrivingFlightTime}/>
            Arriving Flight Airport
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black'}}>
                 {user_arrivingFlightAirport===""?"Select Arriving Airport": user_arrivingFlightAirport}
             </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setArrivingFlightAirport(e, "Delhi")}>Delhi</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setArrivingFlightAirport(e, "Amritsar")}>Amritsar</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setArrivingFlightAirport(e, "Other")}>Other</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
            Arriving Airline Name
            <RenderAirlinesDelhi sangatValue={sangatValue} setAirport={setArrivingFlightName}/>
            Arriving Airline Number
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlightNumber} onChange = {e=>setArrivingFlightNumber(e)} />
            Need Ride from Airport 
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black'}}>
                 {user_ride_from_airport===false?"No": "Yes"}
             </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setUserRideFromAirport(e, "Yes")}>Yes</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setUserRideFromAirport(e, "No")}>No</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
           <div style={{margin: "10px"}}>==========Departing Info =========</div>
            Return Flight Date
            <input type="date" style={{ ...inputStyle }} value={sangatValue.user_departingFlightDate} onChange = {e=>setDepartingFlightDate(e)} />
            Return Flight Time
            <div style={{width: '400px'}}>
            <TimePicker onChange={(value) => setSangatDepartureTime(value)} value={sangatValue.user_departingFlightTime} format={"HH:mm"} disableClock={true}/>
            </div>
            Return Flight Airport
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black'}}>
                 {user_departingFlightAirport===""?"Select Departing Airport": user_departingFlightAirport}
             </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setDepartingFlightAirport(e, "Delhi")}>Delhi</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setDepartingFlightAirport(e, "Amritsar")}>Amritsar</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setDepartingFlightAirport(e, "Other")}>Other</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
            Return Airline Name
            <RenderAirlinesDelhiDeparting sangatValue={sangatValue} setAirport={setDepartingFlightName}/>
            Return Flight Number
            <input style={{ ...inputStyle }} value={sangatValue.user_departingFlightNumber} onChange = {e=>setDepartingFlightNumber(e)} />
           Assign Taxi to User
            <Dropdown style={{paddingTop: '5px'}}>
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'rgb(242, 242, 242)', color: 'black'}}>
                Yes
             </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item onClick={(e)=>setDepartingFlightAirport(e, "Delhi")}>Yes</Dropdown.Item>
                 <Dropdown.Item onClick={(e)=>setDepartingFlightAirport(e, "Amritsar")}>No</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>

            Comments
            <input style={{ ...inputStyle }} value={sangatValue.user_comments} onChange = {e=>setSangatComments(e)} /> 
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateSangat}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default User;