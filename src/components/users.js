import React, {useState, useEffect} from 'react';
import MTable from './helper/materialTable';
import {usersMockData} from '../components/mockData/users';

import { useHistory } from "react-router-dom";
import AddUser from './addUser';

import {HerokuURL} from '../constants';


const Users  = () => {

    const history = useHistory();
  

    const [rowData] = useState(usersMockData)
 
    const [columnDefs] = useState([
        { field: "Firstname", sortable: true, filter: true },
        { field: "Lastname" },
        { field: "City", sortable: true, filter: true },
        { field: "DOB" },
        { field: "FlightInfo"},
        { field: "AllergyInfo"},
    ]);

    const [showUser, setShowUser] = useState(false);

    const addNewUser = () => {
        setShowUser(true);
    }
    
    const [data, setState] = useState([])
    console.log(localStorage.getItem('accessToken'));
    useEffect(()=>{
        fetch(`${HerokuURL}api/getAllUsers`, { headers: {"x-access-token" : localStorage.getItem('accessToken')} }).then(res=>res.json()).then(jsonRes=>setState(jsonRes))
    }, []);

    console.log("Data", data)


    return(
        <div>
            {showUser && <AddUser/>}
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
                <button className="btn btn-primary" onClick={()=>addNewUser()}>Add New User</button>
            </div>
            <h3 style={{marginLeft: '42%'}}>Sangat List</h3>  
                <MTable rowData={rowData} columnDefs={columnDefs} text={"User"} hideGetSelectedRowData={true}/>
             </div>
    )
}


export default Users;