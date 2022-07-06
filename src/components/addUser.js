import React, { useState } from 'react';
import { get } from 'lodash';
import { Modal, Button, Alert } from 'react-bootstrap';
import {editStyling, inputStyle} from './helper/sharedStyling';
import {HerokuURL} from '../constants';
import Loader from '../helper/loader';
import ConfirmDialog from '../helper/confirmationDialog';

const AddNewUser = (props) => {

  const userInfoArray = get(props, 'userSelected', []);

  const userInfo = userInfoArray[0];


  const [show, setShow] = useState(true);
  const [showDialog, setShowDialong] = useState(false);
  const [hostAddedSuccess, setHostAddedSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sangatValue, setSangatValue] = useState({
    user_firstName:"",
    user_lastName:"",
    user_yearOfBirth:"",
    user_gender:"",
    user_city:"",
    user_country:"",
    user_allergy:"",
    user_hasAllergy:false,
    user_phoneNumber:"",
    user_arrivingFlight: "",
    user_arrivingAirport:"",
    user_departingFlight: "",
    user_departingAirport: "",
    user_hostedby:"",
    user_goingToAsthan: ""
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

const setSangatHostedBy = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_hostedby: e.target.value});
}

const setSangatAsthan = (e) => {
  e.preventDefault();
  setSangatValue({...sangatValue, user_goingToAsthan: e.target.value});
}




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
            First Name
            <input style={{ ...inputStyle }} required={true} value ={sangatValue.user_firstName} onChange ={e=>setSangatFirstName(e)}/>
            Last Name
            <input style={{ ...inputStyle }}  value ={sangatValue.user_lastName} onChange ={e=>setSangatLastName(e)}/>
            Gender
            <input style={{ ...inputStyle }}  value ={sangatValue.user_gender} onChange ={e=>setSangatGender(e)}/>
            DOB
            <input type="date" style={{ ...inputStyle }} value={sangatValue.user_yearOfBirth} onChange ={e=>setSangatYearOfBirth(e)} />
            City
            <input style={{ ...inputStyle }}  value ={sangatValue.user_city} onChange ={e=>setSangatCity(e)}/>
            Country
            <input style={{ ...inputStyle }}  value ={sangatValue.user_country} onChange ={e=>setSangatCountry(e)}/>
            Phone Number (Whatsapp)
            <input style={{ ...inputStyle }}  value ={sangatValue.user_phoneNumber} onChange ={e=>setSangatPhoneNumber(e)}/>
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
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewSangat}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default AddNewUser;