import React, {useState, useEffect} from 'react';
import {get} from 'lodash';
import {HerokuURL} from '../../constants';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import Loader from '../../helper/loader';
import {editStyling, inputStyle, floatcontainer} from '../helper/sharedStyling';


const UserTravelInfoLookUp  = (props) => {

const [sangatValue, setSangatValue] = useState({
    user_firstName:"",
    user_lastName:"",
    user_yearOfBirth:"",
  });
  
  const [show, setShow] = useState(true);
  const [userInput, setUserInput] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Please enter the following to look up your travel info:");



  const handleClose = () => {
      setShow(false);
  }

  const setSangatFirstName = (e) => {
    e.preventDefault();
    const removeWhiteSpace = e.target.value.replace(/\s+$/, '')
    setSangatValue({...sangatValue, user_firstName: e.target.value});
  }

  const setSangatLastName = (e) => {
    e.preventDefault();
    const removeWhiteSpace = e.target.value.replace(/\s+$/, '')
    setSangatValue({...sangatValue, user_lastName: e.target.value});
  }

  const setSangatYearOfBirth = (e) => {
    e.preventDefault();
    setSangatValue({...sangatValue, user_yearOfBirth: e.target.value});
  }

  const [data, setState] = useState([])

  const addNewHost = async() => {

    setLoading(true);

    fetch(`${HerokuURL}api/findTravelInfo?user_firstName=${sangatValue.user_firstName}&user_lastName=${sangatValue.user_lastName}&user_yearOfBirth=${sangatValue.user_yearOfBirth}`, {
        method: 'GET',
        headers: {
            "x-access-token" : localStorage.getItem('accessToken'),
            "Content-Type": 'application/json', 
        },
       }).then((res)=>res.json()).then((jsonRes)=>{
           setState(jsonRes);
           setLoading(false);
           setUserInput(false);
       })
      
}
  

  return (
    <>
      <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
             <Modal.Title> {message} </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#f2f2f2' }}>
       {loading && <Loader/>}
            {data!=null && data.length!=0?
            <div style={{marginBottom: '20px', fontWeight: 'bold'}}>Your record found</div>
                :
            data==null &&     
           <div>No Record found. Please try again later with valid info</div>     
            }
        { userInput ? 
          <div style={{ ...editStyling }}>
            First Name * 
            <input style={{ ...inputStyle, borderColor: sangatValue.user_firstName===""? 'red':"" }}  value ={sangatValue.user_firstName} onChange ={e=>setSangatFirstName(e)}/>
            Last Name *
            <input style={{ ...inputStyle, borderColor: sangatValue.user_lastName===""? 'red':""  }}  value ={sangatValue.user_lastName} onChange ={e=>setSangatLastName(e)}/>
            DOB 
            <input type="date" style={{ ...inputStyle, borderColor: sangatValue.user_yearOfBirth===""? 'red':""  }} value={sangatValue.user_yearOfBirth} onChange ={e=>setSangatYearOfBirth(e)} />
            </div>
            : data!=null && 
            <Container fluid>
            <Row style={{fontWeight: 'bold'}}>
              <Col>Fist Name</Col>
              <Col>Last Name</Col>
              <Col>City</Col>
            </Row>
            <Row>
              <Col>{data.user_firstName}</Col>
              <Col>{data.user_lastName}</Col>
              <Col>{data.user_city}</Col>
            </Row>
            <Row style={{marginTop: '20px', fontWeight: 'bold'}}>
              <Col>Arriving Date</Col>
              <Col>Flight Info</Col>
              <Col>Assigned Taxi</Col>
            </Row>
            <Row>
              <Col>{data.user_arrivingFlightDate}</Col>
              <Col>{data.user_arrivingFlightName} {data.user_arrivingFlightNumber}</Col>
              <Col>Please check back 24 hours prior to landing</Col>
            </Row>
          </Container> 
            }          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {userInput &&
          <Button variant="primary" onClick={addNewHost}>
            Save Changes
          </Button>
            }
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default UserTravelInfoLookUp;