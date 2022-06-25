import React, {useState, useEffect} from 'react';
import {get} from 'lodash';
import {HerokuURL} from '../../constants';
import { Modal, Button } from 'react-bootstrap';
import MTable from '../helper/materialTable';
import {sangatVistingAsthan} from '../../components/mockData/users';


const editStyling = {
    display: 'flex',
    flexDirection: 'column'
}

// Make a backend call to fetch sangat staying at this host 

const AssignHostToSangat  = (props) => {

//  const userInfoArray = get(props, 'userSelected', []);

//  const userInfo = userInfoArray[0];

  
  const [show, setShow] = useState(true);

  const handleClose = () => {
      setShow(false);
  }
  const handleShow = () => setShow(true);

  const openSangatModel = () => {
    
  }

  const [data, setState] = useState([])
  const params = {
      asthan: props.asthan
  }
  useEffect(()=>{
      fetch(`${HerokuURL}api/getAllUsersNotAssignedToHost?asthan=${props.asthan}`, {
          method: 'GET',
          headers: {
              "x-access-token" : localStorage.getItem('accessToken'),
              "Content-Type": 'application/json', 
          },
         }).then(res=>res.json()).then(jsonRes=>setState(jsonRes))
  }, []);
  

  return (
    <>
      <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
             <Modal.Title>Sangat not assigned host yet for {props.asthan}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div style={{...editStyling}}>
                <MTable rowData={data} columnDefs={sangatVistingAsthan} text={"Sangat at Host"} hideGetSelectedRowData={false}/>
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


export default AssignHostToSangat;