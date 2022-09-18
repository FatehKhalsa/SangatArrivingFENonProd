import React, {useState, useEffect} from 'react';
import MTable from './helper/materialTable';
import { useHistory } from "react-router-dom";
import AddNewUser from './addUser';
import {sangatVistingGurpurab} from './mockData/users'
import {HerokuURL} from '../constants';
import { authenticationService } from '../userAuthMocks';





const Saravas  = (props) => {

    const history = useHistory();

    const Role = props.location.state;

    const [data, setState] = useState([])
    useEffect(()=>{
        fetch(`${HerokuURL}api/getAllUsers`, { headers: {"x-access-token" : localStorage.getItem('accessToken')} }).then(res=>res.json()).then(jsonRes=>setState(jsonRes))
    }, []);

    if(data && data.message==="Unauthorized!"){
        authenticationService.logout();
        history.push('/');
        window.location.reload();
    }

    const [columnDefs] = useState(sangatVistingGurpurab);

    const [showUser, setShowUser] = useState(false);

    const addNewUser = () => {
        setShowUser(true);
    }

    const routeToPage = (route) => {
        history.push({
            pathname: `/${route}`,
            state: data
          });
    }

    console.log("Role", Role);
    
        return(
            <div>
                {showUser && <AddNewUser/>}
               <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', height: '60px'}}>
                {/* <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button> */}
                <button className="btn btn-primary addSangat" onClick={()=>addNewUser()}>Add New Sangat</button> 
                </div>
                <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <button  onClick={e=>routeToPage('reporting/ArriveSangatReport')}>Arriving Sangat Report</button> 
                <button  onClick={e=>routeToPage('reporting/ReturnSangatReport')}>Return Sangat Report</button> 
                <button  style={{marginLeft: '1%'}}onClick={e=>routeToPage('reporting/taxiReport')}>Taxi Report</button> 
                </div>
              
            <h3 style={{textAlign: 'center'}}>Arriving Sangat List for 2022 Gurpurab </h3>  
                <MTable rowData={data} columnDefs={columnDefs} text={"Sangat Gurpurab"} hideGetSelectedRowData={true}/>
            </div>
        )
    
}


export default Saravas;