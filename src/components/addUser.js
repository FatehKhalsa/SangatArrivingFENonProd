import React, { useState } from 'react';
import { Modal, Button, Alert, Form,  InputGroup, Dropdown} from 'react-bootstrap';

import {editStyling, floatchild, inputStyle, floatcontainer} from './helper/sharedStyling';
import {HerokuURL} from '../constants';
import Loader from '../helper/loader';
import RenderCountries from '../components/helper/renderCountries';
import RenderStates from '../components/helper/renderStates';
import RenderAsthans from '../components/helper/renderAsthans';
import TimePicker from 'react-time-picker';
import RenderAirlinesDelhi from '../components/helper/renderIndiaAirlines';
import SangatArriving from './asthans/FresnoCA/FresnoCASangatArriving';


const AddNewUser = (props) => {

  const [show, setShow] = useState(true);
  const [showDialog, setShowDialong] = useState(false);
  const [hostAddedSuccess, setHostAddedSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, onChange] = useState('00:00');
  const [valueDeparture, onChangeDeparture] = useState('00:00');
  const [sangatValue, setSangatValue] = useState({
    user_firstName:"",
    user_middleName: "",
    user_lastName:"",
    user_yearOfBirth:"",
    user_gender:"",
    user_city:"",
    user_state: "",
    user_country:"",
    user_allergy:"",
    user_hasAllergy:false,
    user_phoneNumber:"",
    user_email: "",
    user_arrivingFlightNumber: "",
    user_arrivingFlightName: "",
    user_arrivingFlightAirport: "",
    user_arrivingFlightDate: "",
    user_arrivingFlightTime: "",
    user_departingFlightNumber: "",
    user_departingFlightName: "",
    user_departingFlightAirport: "",
    user_departingFlightDate: "",
    user_departingFlightTime: "",
    user_hostedby:"",
    user_goingToAsthan: "",
    user_emergencyContact: "",
    user_comments: "",
    user_age: 0,
    user_ride_from_airport: false,
  });

  const handleClose = () => {
    // Add logic for confirmation
    setShowDialong(true);
    setShow(false);
  }

  const handleShow = () => setShow(true);

  const addNewSangat = async() => {

    setLoading(true);
    fetch(`${HerokuURL}api/user/create`, {
      method: 'POST',
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
        if(status.message==='Failed! User is already in System!'){
          setError(true);
        }
        setHostAddedSuccess(true); 

        setLoading(false); setShow(false);
      })
}

const setSangatFirstName = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_firstName: e.target.value});
}

const setSangatMiddletName = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_middleName: e.target.value});
}

const setSangatLastName = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_lastName: e.target.value});
}

const setSangatArrivalTime = (value) =>{
  setSangatValue({...sangatValue, user_arrivingFlightTime: value});
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

const setSangatGender = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_gender: e.target.value});
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

const setSangatCity = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_city: e.target.value});
}

const setArrivingFlightNumber = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightNumber: e.target.value}) 
}

const setArrivalTime = (e) =>{
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightTime: e.target.value})
}

const setArrivingFlightName = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightName: e.target.value}) 
}

const setArrivingFlightAirport = (e, value) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightAirport: value}) 
}

const setArrivingFlightDate = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightDate: e.target.value}) 
}

const setDepartingFlightNumber = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightNumber: e.target.value}) 
}

const setDepartingFlightName = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightName: e.target.value}) 
}

const setDepartingFlightAirport = (e, value) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightAirport: value}) 
}

const setDepartingFlightDate = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightDate: e.target.value}) 
}

const setSangatCountry = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_country: e.target.value});
}

const setSangatAllergy = (e) => {
  e.preventDefault();
  if(e.target.value!=''){
  setSangatValue({...sangatValue, user_allergy: e.target.value, user_hasAllergy: true});
  }
}

const setSangatPhoneNumber = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_phoneNumber: e.target.value});
}

const setSangatEmail = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_email: e.target.value});
}

const setSangatHostedBy = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_hostedby: e.target.value});
}

const setSangatAsthan = (e, value) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_goingToAsthan: value});
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

const getClosestAsthan = (e) =>{
  e.preventDefault();
  let closestAsthan = ""

  if(user_country==="USA"){
    if(user_state==="California"){
      closestAsthan = "Fresno"
    }
    else if(user_state==="Indiana"){
      closestAsthan = "Indiana"
    }
    else if(user_state==="Michigan"){
      closestAsthan = "Michigan"
    }
    else if(user_state==="New York"){
      closestAsthan = "New York"
    }
  }
  
  setClosestAsthan(closestAsthan);
}

const setUserRideFromAirport = (e, value) =>{
  e.preventDefault();
  let boolCheck = false;
  value==="Yes"?boolCheck=true: boolCheck=false;
  setSangatValue({...sangatValue, user_ride_from_airport: boolCheck})
}

//document.getElementsByClassName('addSangat').addEventListener('click', handleShow)
const dselect = document.querySelectorAll('.addSangat');
dselect.forEach(el => el.addEventListener('click', handleShow));

const{user_country, user_state, user_arrivingFlightAirport, user_departingFlightAirport, user_ride_from_airport} = sangatValue



  return (
    <>
     {hostAddedSuccess && <Alert key={error? 'danger':'success'} variant={error? 'danger':'success'}>
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
              <input type="radio" id="Male" name= "genderSelect" style={{...inputStyle }}  value ="Male" onChange ={e=>setSangatGender(e)}/>
              <label for="Male" style={{top:'50%'}}> Male</label></div>
              <div style={{...floatchild}}>
              <input type="radio" id="Female" name= "genderSelect" style={{ ...inputStyle }}  value ="Female" onChange ={e=>setSangatGender(e)}/>
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
            <div style={{margin: "10px"}}>========================
            Arriving Info ========================================</div>
            Arriving Flight Date
            <input type="date" style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setArrivingFlightDate(e)} />
            Arriving Flight Time
            <div style={{width: '400px'}}>
            <TimePicker onChange={(value) => setSangatArrivalTime(value)} value={value} format={"HH:mm"}/>
            </div>
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
            <RenderAirlinesDelhi sangatValue={sangatValue} setAirport={setArrivingFlightAirport}/>
            Arriving Airline Number
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setArrivingFlightNumber(e)} />
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
           <div style={{margin: "10px"}}>========================
            Departing Info ========================================</div>
            Departing Flight Date
            <input type="date" style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setDepartingFlightDate(e)} />
            Departing Flight Time
            <div style={{width: '400px'}}>
            <TimePicker onChange={(value) => setSangatDepartureTime(value)} value={valueDeparture} format={"HH:mm"}/>
            </div>
            Departing Flight Airport
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
            Departing Airline Name
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setDepartingFlightName(e)} />
            Departing Flight Number
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setDepartingFlightNumber(e)} />

            Comments
            <input style={{ ...inputStyle }} value={sangatValue.user_comments} onChange = {e=>setSangatComments(e)} /> 
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewSangat} disabled={sangatValue.user_firstName==="" || sangatValue.user_lastName==="" || sangatValue.user_yearOfBirth==="" || sangatValue.user_city===""|| sangatValue.user_state==="" || sangatValue.user_phoneNumber===""}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default AddNewUser;