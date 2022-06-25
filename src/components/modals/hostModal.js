import React, {useState} from 'react';
import {get} from 'lodash';
import { Modal, Button } from 'react-bootstrap';
import MTable from '../helper/materialTable';
import AssignHostToSangat from './assignHostToSangat';
import {sangatStayatHostMockData, sangatStayatHostColumns} from '../../components/mockData/users';


const editStyling = {
    display: 'flex',
    flexDirection: 'column'
}

// Make a backend call to fetch sangat staying at this host 

const HostModal  = (props) => {

 const userInfoArray = get(props, 'userSelected', []);

 const userInfo = userInfoArray[0];

 console.log("Props coming in:",userInfo)
  
  const [show, setShow] = useState(true);

  const handleClose = () => {
      setShow(false);
  }
  const handleShow = () => setShow(true);

  const [showAssignSangatModel, setAssignSangatModel] = useState(false);

  const openSangatModel = () => {
      setAssignSangatModel(true);
  }
  

  return (
    <>
      {showAssignSangatModel && <AssignHostToSangat asthan={userInfo.Host_at_asthan}/>}
      <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Host Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{...editStyling}}>
               Host Name: {userInfo.Host_Name}
        </div>
        <div style={{...editStyling}}>
               Below is the list of sangat staying at this host:
               <Button style={{width: '240px'}} onClick={openSangatModel}>Add new Sangat for this host</Button>
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