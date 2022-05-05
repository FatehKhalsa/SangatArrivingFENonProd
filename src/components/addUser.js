import React, {useState} from 'react';
import {get} from 'lodash';
import { Modal, Button } from 'react-bootstrap';


const editStyling = {
    display: 'flex',
    flexDirection: 'column'
}


const AddUser  = (props) => {

 
  
  const [show, setShow] = useState(true);

  const handleClose = () =>  setShow(false);
  
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{...editStyling}}>
               First Name
               <input />
            </div>
            <div style={editStyling}>
               Last Name
               <input />
            </div>
            <div style={editStyling}>
               DOB
               <input />
            </div>
            <div style={editStyling}>
                Address
                <input />
            </div>
            <div style={editStyling}>
               City
               <input />
            </div>
            <div style={editStyling}>
               State
               <input />
            </div>
            <div style={editStyling}>
               Additional Info
               <input />
            </div>
            <div className="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    Add Family
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default AddUser;