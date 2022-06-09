import React, {useState} from 'react';
import {get} from 'lodash';
import { Modal, Button } from 'react-bootstrap';
import MTable from '../helper/materialTable';
import {sangatStayatHostMockData, sangatStayatHostColumns} from '../../components/mockData/users';


const editStyling = {
    display: 'flex',
    flexDirection: 'column'
}

// Make a backend call to fetch sangat staying at this host 

const HostModal  = (props) => {

 const userInfoArray = get(props, 'userSelected', []);

 const userInfo = userInfoArray[0];

 console.log(userInfo)
  
  const [show, setShow] = useState(true);

  const handleClose = () => {
      setShow(false);
  }
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Host Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{...editStyling}}>
               Host Name: {userInfo.HostFirstName} {userInfo.HostLastName}
        </div>
        <div style={{...editStyling}}>
               Sangat staying at this host:
                <MTable rowData={sangatStayatHostMockData} columnDefs={sangatStayatHostColumns} text={"Sangat at Host"} hideGetSelectedRowData={false}/>
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


export default HostModal;