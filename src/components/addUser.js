import React, { useState } from 'react';
import { get } from 'lodash';
import { Modal, Button, Alert, Form,  InputGroup} from 'react-bootstrap';
import {editStyling, floatchild, inputStyle, floatcontainer} from './helper/sharedStyling';
import {HerokuURL} from '../constants';
import Loader from '../helper/loader';
import ConfirmDialog from '../helper/confirmationDialog';

const AddNewUser = (props) => {

  const [show, setShow] = useState(true);
  const [showDialog, setShowDialong] = useState(false);
  const [hostAddedSuccess, setHostAddedSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
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
    user_departingFlightNumber: "",
    user_departingFlightName: "",
    user_departingFlightAirport: "",
    user_departingFlightDate: "",
    user_hostedby:"",
    user_goingToAsthan: "",
    user_emergencyContact: "",
    user_comments: "",
    user_age: 0,
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

const setSangatState = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_state: e.target.value});
}

const setArrivingFlightNumber = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightNumber: e.target.value}) 
}

const setArrivingFlightName = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightName: e.target.value}) 
}

const setArrivingFlightAirport = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlightAirport: e.target.value}) 
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

const setDepartingFlightAirport = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlightAirport: e.target.value}) 
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

const setSangatAsthan = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_goingToAsthan: e.target.value});
}

const setSangatEmergencyContact = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_emergencyContact: e.target.value});
}

const setSangatComments = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_comments: e.target.value});
}


//document.getElementsByClassName('addSangat').addEventListener('click', handleShow)
const dselect = document.querySelectorAll('.addSangat');
dselect.forEach(el => el.addEventListener('click', handleShow));


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
              <input type="radio" id="Singh" name= "genderSelect" style={{...inputStyle }}  value ="Singh" onChange ={e=>setSangatGender(e)}/>
              <label for="Singh" style={{top:'50%'}}> Singh</label></div>
              <div style={{...floatchild}}>
              <input type="radio" id="Kaur" name= "genderSelect" style={{ ...inputStyle }}  value ="Kaur" onChange ={e=>setSangatGender(e)}/>
              <label for="Kaur"> Kaur</label></div>
            </div>
            DOB *
            <input type="date" style={{ ...inputStyle, borderColor: sangatValue.user_yearOfBirth===""? 'red':""  }} value={sangatValue.user_yearOfBirth} onChange ={e=>setSangatYearOfBirth(e)} />
            City * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_city===""? 'red':""  }}  value ={sangatValue.user_city} onChange ={e=>setSangatCity(e)}/>
            State/Province * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_state===""? 'red':""  }}  value ={sangatValue.user_state} onChange ={e=>setSangatState(e)}/>
            Country *
            <input style={{ ...inputStyle, borderColor: sangatValue.user_country===""? 'red':""  }}  value ={sangatValue.user_country} onChange ={e=>setSangatCountry(e)}/> 
            Phone Number (Whatsapp) * 
            <input onkeyup="value=isNaN(parseFloat(value))||value<0||value>9000?1000:value" type="number" style={{ ...inputStyle, borderColor: sangatValue.user_phoneNumber===""? 'red':""  }}  value ={sangatValue.user_phoneNumber} onChange ={e=>setSangatPhoneNumber(e)}/>
            Email * 
            <input type="email" style={{ ...inputStyle, borderColor: sangatValue.user_email===""? 'red':""  }}  value ={sangatValue.user_email} onChange ={e=>setSangatEmail(e)}/>
            Allergies
            <input style={{ ...inputStyle }}  value ={sangatValue.user_allergy} onChange ={e=>setSangatAllergy(e)}/>
            Arriving Flight Number
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setArrivingFlightNumber(e)} />
            Arriving Airline Name
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setArrivingFlightName(e)} />
            Arriving Flight Date
            <input type="date" style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setArrivingFlightDate(e)} />
            Arriving Flight Airport
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setArrivingFlightAirport(e)} />
            Departing Flight Number
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setDepartingFlightNumber(e)} />
            Departing Airline Name
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setDepartingFlightName(e)} />
            Departing Flight Date
            <input type="date" style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setDepartingFlightDate(e)} />
            Departing Flight Airport
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setDepartingFlightAirport(e)} />
            closest Asthan
            <input style={{ ...inputStyle }} value={sangatValue.user_goingToAsthan} onChange = {e=>setSangatAsthan(e)} /> 
            Emergency Contact
            <input style={{ ...inputStyle }} value={sangatValue.user_emergencyContact} onChange = {e=>setSangatEmergencyContact(e)} /> 
            Comments
            <input style={{ ...inputStyle }} value={sangatValue.user_comments} onChange = {e=>setSangatComments(e)} /> 
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewSangat} disabled={sangatValue.user_firstName==="" || sangatValue.user_lastName==="" || sangatValue.user_yearOfBirth==="" || sangatValue.user_city===""|| sangatValue.user_state==="" || sangatValue.user_email==="" || sangatValue.user_phoneNumber===""}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default AddNewUser;