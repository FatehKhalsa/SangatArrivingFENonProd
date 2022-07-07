import React, { useState } from 'react';
import { get } from 'lodash';
import { Modal, Button, Alert, Form,  InputGroup} from 'react-bootstrap';
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

const setSangatMiddleName = (e) => {
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

const setSangatEmail= (e) => {
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

const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    console.log("missing data")
  } else {
    console.log("all good")
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

  setValidated(true);
};

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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>User Info</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#f2f2f2' }}>
            <div style={{ ...editStyling }}>
              <Form.Group controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value ={sangatValue.user_firstName} 
                  onChange ={e=>setSangatFirstName(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationCustom02">
                <Form.Label>Middle name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Middle name"
                  value ={sangatValue.user_middleName} 
                  onChange ={e=>setSangatMiddleName(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom03">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value ={sangatValue.user_lastName} 
                  onChange ={e=>setSangatLastName(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom04">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Gender"
                  value ={sangatValue.user_gender} 
                  onChange ={e=>setSangatGender(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom05">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="DOB"
                  value ={sangatValue.user_yearOfBirth} 
                  onChange ={e=>setSangatYearOfBirth(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom06">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City"
                  value ={sangatValue.user_city} 
                  onChange ={e=>setSangatCity(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom07">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Country"
                  value ={sangatValue.user_country} 
                  onChange ={e=>setSangatCountry(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom08">
                <Form.Label>PhoneNumber</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="PhoneNumber"
                  value ={sangatValue.user_phoneNumber} 
                  onChange ={e=>setSangatPhoneNumber(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom09">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value ={sangatValue.user_email} 
                  onChange ={e=>setSangatEmail(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom10">
                <Form.Label>Allergies</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Allergies"
                  value ={sangatValue.user_allergy} 
                  onChange ={e=>setSangatAllergy(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom11">
                <Form.Label>ArrivingFlight</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="ArrivingFlight"
                  value ={sangatValue.user_arrivingFlight} 
                  onChange ={e=>setSangatArrivingFlight(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom12">
                <Form.Label>ArrivingAirport</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="ArrivingAirport"
                  value ={sangatValue.user_arrivingAirport} 
                  onChange ={e=>setSangatArrivingAirport(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom13">
                <Form.Label>DepartingFlight</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="DepartingFlight"
                  value ={sangatValue.user_departingFlight} 
                  onChange ={e=>setSangatDepartingFlight(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom14">
                <Form.Label>DepartingAirport</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="DepartingAirport"
                  value ={sangatValue.user_departingAirport} 
                  onChange ={e=>setSangatDepartingAirport(e)}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom15">
                <Form.Label>VisitingAsthan</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="VisitingAsthan"
                  value ={sangatValue.user_goingToAsthan} 
                  onChange ={e=>setSangatAsthan(e)}
                />
              </Form.Group>
              {/* First Name 
              <input style={{ ...inputStyle }} value ={sangatValue.user_firstName} onChange ={e=>setSangatFirstName(e)}/> */}
              {/* Middle Name
              <input style={{ ...inputStyle }} required={true} value ={sangatValue.user_middleName} onChange ={e=>setSangatMiddleName(e)}/>
              Last Name
              <input style={{ ...inputStyle }}  value ={sangatValue.user_lastName} onChange ={e=>setSangatLastName(e)}/> */}
              {/* Gender
              <input style={{ ...inputStyle }}  value ={sangatValue.user_gender} onChange ={e=>setSangatGender(e)}/> */}
              {/* DOB
              <input type="date" style={{ ...inputStyle }} value={sangatValue.user_yearOfBirth} onChange ={e=>setSangatYearOfBirth(e)} />
              City
              <input style={{ ...inputStyle }}  value ={sangatValue.user_city} onChange ={e=>setSangatCity(e)}/> */}
              {/* Country
              <input style={{ ...inputStyle }}  value ={sangatValue.user_country} onChange ={e=>setSangatCountry(e)}/>
              Phone Number (Whatsapp)
              <input style={{ ...inputStyle }}  value ={sangatValue.user_phoneNumber} onChange ={e=>setSangatPhoneNumber(e)}/>
              Email
              <input style={{ ...inputStyle }}  value ={sangatValue.user_email} onChange ={e=>setSangatEmail(e)}/> */}
              {/* Allergies
              <input style={{ ...inputStyle }}  value ={sangatValue.user_allergy} onChange ={e=>setSangatAllergy(e)}/> */}
              {/* Arriving Flight Info
              <input style={{ ...inputStyle }} value={sangatValue.user_arrivingFlight} onChange = {e=>setSangatArrivingFlight(e)} />
              Arriving Airport
              <input style={{ ...inputStyle }} value={sangatValue.user_arrivingAirport} onChange = {e=>setSangatArrivingAirport(e)} />
              Departing Flight
              <input style={{ ...inputStyle }} value={sangatValue.user_departingFlight} onChange = {e=>setSangatDepartingFlight(e)} /> */}
              {/* Departing Airport
              <input style={{ ...inputStyle }} value={sangatValue.user_departingAirport} onChange = {e=>setSangatDepartingAirport(e)} />
              Visiting Asthan
              <input style={{ ...inputStyle }} value={sangatValue.user_goingToAsthan} onChange = {e=>setSangatAsthan(e)} />  */}
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );

}


export default AddNewUser;