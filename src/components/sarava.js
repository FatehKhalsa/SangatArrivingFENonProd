import React, {useState} from 'react';
import {get} from 'lodash';
import { Modal, Button } from 'react-bootstrap';


const editStyling = {
    display: 'flex',
    flexDirection: 'column'
}


const Sarava  = (props) => {

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
          <Modal.Title>Sarava Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{...editStyling}}>
            Name
               <input value={userInfo.Firstname} />
            </div>
            <div style={editStyling}>
            Capacity
               <input value={userInfo.Lastname} />
            </div>
            <div style={editStyling}>
            Remaning Capacity
               <input value={userInfo.DOB} />
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


export default Sarava;

