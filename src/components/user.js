import React, { useState } from 'react';
import { get } from 'lodash';
import { Modal, Button } from 'react-bootstrap';
import {editStyling, inputStyle} from './helper/sharedStyling';
import ConfirmDialog from '../helper/confirmationDialog';

const User = (props) => {

  const userInfoArray = get(props, 'userSelected', []);

  const userInfo = userInfoArray[0];


  const [show, setShow] = useState(true);
  const [showDialog, setShowDialong] = useState(false);

  const handleClose = () => {
    // Add logic for confirmation
    setShowDialong(true);
    setShow(false);
  }
  const handleShow = () => setShow(true);


  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#f2f2f2' }}>
          <div style={{ ...editStyling }}>
            First Name
               <input style={{ ...inputStyle }} value={userInfo.Firstname} />
                Last Name
              <input style={{ ...inputStyle }} value={userInfo.Lastname} />
               DOB
               <input style={{ ...inputStyle }} value={userInfo.DOB} />
               Address
               <input style={{ ...inputStyle }} value={'2685 N Hornet Ave, Fresno CA 93737'} />
               Flight Info
               <input style={{ ...inputStyle }} value={'AI 183'} />
               Additional Info
               <input style={{ ...inputStyle }} value={'Allergy'} />
               Hosted at
               <input style={{ ...inputStyle }} value={'Swaran Singh Dhillon, Toronto'} />
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