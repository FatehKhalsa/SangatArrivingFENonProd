import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { Modal, Button, Alert } from 'react-bootstrap';
import {editStyling, inputStyle} from '../helper/sharedStyling';
import {HerokuURL} from '../../constants';
import Loader from '../../helper/loader';


// import ConfirmDialog from '../helper/confirmationDialog';

const AddNewHost = (props) => {

  const hostProps = get(props, 'asthan', []);

//   const userInfo = userInfoArray[0];

  const [show, setShow] = useState(true);
  const [hostAddedSuccess, setHostAddedSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialong] = useState(false);
  const [hostValue, setHostValue] = useState({
      Host_Name: "",
      Host_Address: {
          HouseNumber: "",
          StreetName: "",
          City: "",
          State: "",
          Country: ""
      },
      Host_Distance: 0,
      Host_Availability: {
          Rooms: 0,
          Beds: 0,
          Slots: 0,
      },
      Restrictions: "None",
      ProvidingRide: "",
      Host_at_asthan: hostProps
    });

  const handleClose = () => {
    // Add logic for confirmation
    setShowDialong(true);
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const setHostName = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Name: e.target.value});
  }

  const setHostHouseNumber = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Address: {...hostValue.Host_Address, HouseNumber: e.target.value}});
    console.log(hostValue);
  }

  const setHostStreetName = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Address: {...hostValue.Host_Address, StreetName: e.target.value}});
    console.log(hostValue);
  }

  const setHostCity = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Address: {...hostValue.Host_Address, City: e.target.value}});
    console.log(hostValue);
  }

  const setHostState = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Address: {...hostValue.Host_Address, State: e.target.value}});
    console.log(hostValue);
  }

  const setHostCountry = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Address: {...hostValue.Host_Address, Country: e.target.value}});
    console.log(hostValue);
  }

  const setHostDistance = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Distance: e.target.value});
  }

  const setHostRooms = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Availability: {...hostValue.Host_Availability, Rooms: e.target.value}});
    console.log(hostValue);
  }

  const setHostBeds = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Availability: {...hostValue.Host_Availability, Beds: e.target.value}});
    console.log(hostValue);
  }

  const setHostSlots = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Host_Availability: {...hostValue.Host_Availability, Slots: e.target.value}});
    console.log(hostValue);
  }

  const setHostRestrictions = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, Restrictions: e.target.value});
}

const setHostProvidingRide = (e) => {
    e.preventDefault();
    setHostValue({...hostValue, ProvidingRide: e.target.value});
}

const addNewHost = async() => {
    setLoading(true);
    fetch(`${HerokuURL}api/host/create`, {
      method: 'POST',
      headers: {
        "x-access-token" : localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        hostValue
      ),
    })
      .then((res) => res.json()).then((status)=>{
        console.log("status",status)
        setToastMessage(status.message);
        if(status.message==='Failed! Host is already in use!'){
          setError(true);
        }
        setHostAddedSuccess(true); 

        setLoading(false); setShow(false);
      })
}


  return (
    <>
    {hostAddedSuccess && <Alert key={'success'} variant={error? 'danger':'success'}>
      {toastMessage}
    </Alert>}
    {loading && <Loader/>}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
  <Modal.Title>Add new Host for {hostProps}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#f2f2f2' }}>
          <div style={{ ...editStyling }}>
            Name
               <input style={{ ...inputStyle }}  value ={hostValue.Host_Name} onChange ={e=>setHostName(e)}/>
            House Number
               <input style={{ ...inputStyle }} value ={hostValue.Host_Address.HouseNumber} onChange ={e=>setHostHouseNumber(e)}/>
            Street Name 
                <input style={{ ...inputStyle }} value ={hostValue.Host_Address.StreetName} onChange ={e=>setHostStreetName(e)}/>
            City 
                <input style={{ ...inputStyle }} value ={hostValue.Host_Address.City} onChange ={e=>setHostCity(e)}/>
            State
                <input style={{ ...inputStyle }} value ={hostValue.Host_Address.State} onChange ={e=>setHostState(e)}/>
            Country
                <input style={{ ...inputStyle }} value ={hostValue.Host_Address.Country} onChange ={e=>setHostCountry(e)}/>
            Distance from darbar sahib
               <input style={{ ...inputStyle }} value ={hostValue.Host_Distance} onChange ={e=>setHostDistance(e)}/>
            Rooms Available
               <input style={{ ...inputStyle }} value ={hostValue.Host_Availability.Rooms} onChange ={e=>setHostRooms(e)}/>
            Beds Available
            <input style={{ ...inputStyle }} value ={hostValue.Host_Availability.Beds} onChange ={e=>setHostBeds(e)}/>
            Slots Available (If sangat will be using gadha)
            <input style={{ ...inputStyle }} value ={hostValue.Host_Availability.Slots} onChange ={e=>setHostSlots(e)}/>
            Providing Ride
            <input style={{ ...inputStyle }} value ={hostValue.ProvidingRide} onChange ={e=>setHostProvidingRide(e)}/>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewHost}>
            Add New Host at {hostProps}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default AddNewHost;