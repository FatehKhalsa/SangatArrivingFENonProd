import React, { useState } from 'react';
import { get } from 'lodash';
import { Modal, Button, Alert, Form,  InputGroup} from 'react-bootstrap';
import {editStyling, inputStyle} from './helper/sharedStyling';
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
    user_arrivingFlight: "",
    user_arrivingAirport:"",
    user_departingFlight: "",
    user_departingAirport: "",
    user_hostedby:"",
    user_goingToAsthan: "",
    user_emergencyContact: "",
    user_comments: "",
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
        console.log("status",status)
        setToastMessage(status.message);
        if(status.message==='Failed! User is already in use!'){
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
  setSangatValue({...sangatValue, user_yearOfBirth: e.target.value});
}

const setSangatGender = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_gender: e.target.value});
}

const setSangatCity = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_city: e.target.value});
}

const setSangatState = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_state: e.target.value});
}

const setSangatArrivingFlight = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingFlight: e.target.value});
}

const setSangatArrivingAirport = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_arrivingAirport: e.target.value});
}

const setSangatDepartingFlight = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingFlight: e.target.value});
}

const setSangatDepartingAirport = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_departingAirport: e.target.value});
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
            Gender
            <input style={{ ...inputStyle }}  value ={sangatValue.user_gender} onChange ={e=>setSangatGender(e)}/>
            DOB *
            <input type="date" style={{ ...inputStyle, borderColor: sangatValue.user_yearOfBirth===""? 'red':""  }} value={sangatValue.user_yearOfBirth} onChange ={e=>setSangatYearOfBirth(e)} />
            City * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_city===""? 'red':""  }}  value ={sangatValue.user_city} onChange ={e=>setSangatCity(e)}/>
            State/Province * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_state===""? 'red':""  }}  value ={sangatValue.user_state} onChange ={e=>setSangatState(e)}/>
            Country * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_country===""? 'red':""  }}  value ={sangatValue.user_country} onChange ={e=>setSangatCountry(e)}/>
            Phone Number (Whatsapp) * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_phoneNumber===""? 'red':""  }}  value ={sangatValue.user_phoneNumber} onChange ={e=>setSangatPhoneNumber(e)}/>
            Email * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_email===""? 'red':""  }}  value ={sangatValue.user_email} onChange ={e=>setSangatEmail(e)}/>
            Allergies
            <input style={{ ...inputStyle }}  value ={sangatValue.user_allergy} onChange ={e=>setSangatAllergy(e)}/>
            Arriving Flight Info
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setSangatArrivingFlight(e)} />
            Arriving Airport
            <input style={{ ...inputStyle }} value={sangatValue.user_arrivingAirport} onChange = {e=>setSangatArrivingAirport(e)} />
            Departing Flight
            <input style={{ ...inputStyle }} value={sangatValue.user_departingFlight} onChange = {e=>setSangatDepartingFlight(e)} />
            Departing Airport
            <input style={{ ...inputStyle }} value={sangatValue.user_departingAirport} onChange = {e=>setSangatDepartingAirport(e)} />
            Visiting Asthan
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