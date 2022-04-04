import React, {useState} from 'react';
import _ from 'lodash';
import { Modal, Button } from 'react-bootstrap';


const User  = (props) => {

 console.log(_.get(props, {}));
  
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const {userSelected} = props[0];

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                {/* <h3>{userSelected.FirstName}</h3> */}
                User Detail
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