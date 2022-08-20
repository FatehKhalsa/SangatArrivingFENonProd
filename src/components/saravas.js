import React, {useState, useEffect} from 'react';
import MTable from './helper/materialTable';
import { useHistory } from "react-router-dom";
import AddNewUser from './addUser';
import {sangatVistingGurpurab} from './mockData/users'
import {HerokuURL} from '../constants';




const Saravas  = () => {

    const history = useHistory();

    const [data, setState] = useState([])
    useEffect(()=>{
        fetch(`${HerokuURL}api/getAllUsers`, { headers: {"x-access-token" : localStorage.getItem('accessToken')} }).then(res=>res.json()).then(jsonRes=>setState(jsonRes))
    }, []);

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

    
    
        return(
            <div>
                {showUser && <AddNewUser/>}
               <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
                <button className="btn btn-primary addSangat" onClick={()=>addNewUser()}>Add New Sangat</button> 
                </div>
                <div style={{textAlign: "Right"}}>
                <button  onClick={e=>routeToPage('reporting/taxiReport')}>Open Taxi Report</button> 
                <button  onClick={e=>routeToPage('reporting/taxiReport')}>Open Arriving Sangat Report</button> 
                </div>
            <h3 style={{marginLeft: '30%'}}>Arriving Sangat List for 2022 Gurpurab </h3>  
                <MTable rowData={data} columnDefs={columnDefs} text={"Sangat Gurpurab"} hideGetSelectedRowData={true}/>
            </div>
        )
    
}


export default Saravas;