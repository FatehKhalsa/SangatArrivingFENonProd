import React, {useState} from 'react';
import {get} from 'lodash';
import { Modal, Button } from 'react-bootstrap';


const editStyling = {
    display: 'flex',
    flexDirection: 'column'
}


const User  = (props) => {

 const userInfoArray = get(props, 'userSelected', []);

 const userInfo = userInfoArray[0];

 console.log(userInfo)
  
  const [show, setShow] = useState(true);

  const handleClose = () => {
      props.resetComponent();
      setShow(false);
  }
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{...editStyling}}>
               First Name
               <input value={userInfo.Firstname} />
            </div>
            <div style={editStyling}>
               Last Name
               <input value={userInfo.Lastname} />
            </div>
            <div style={editStyling}>
               DOB
               <input value={userInfo.DOB} />
            </div>
            <div style={editStyling}>
                Address
               <input value={userInfo.Address} />
            </div>
            <div style={editStyling}>
               Flight Info
               <input value={'AI 183'} />
            </div>
            <div style={editStyling}>
               Additional Info
               <input value={'Allergy'} />
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


export default User;