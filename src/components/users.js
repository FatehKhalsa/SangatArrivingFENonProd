import React, {useState, useEffect} from 'react';
import MTable from './helper/materialTable';

import { useHistory } from "react-router-dom";
import AddNewUser from './addUser';
import {sangatVistingAsthan} from './mockData/users'

import {HerokuURL} from '../constants';


const Users  = () => {

    const history = useHistory();
   
    const [columnDefs] = useState(sangatVistingAsthan);

    const [showUser, setShowUser] = useState(false);

    const addNewUser = () => {
        setShowUser(true);
    }
    
    const [data, setState] = useState([])
    useEffect(()=>{
        fetch(`${HerokuURL}api/getAllUsers`, { headers: {"x-access-token" : localStorage.getItem('accessToken')} }).then(res=>res.json()).then(jsonRes=>setState(jsonRes))
    }, []);

    console.log("Data", data)


    return(
        <div>
            {showUser && <AddNewUser/>}
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
                <button id='addSangat' className="btn btn-primary" onClick={()=>addNewUser()}>Add New Sangat</button>
            </div>
            <h3 style={{marginLeft: '42%'}}>Sangat List</h3>  
                <MTable rowData={data} columnDefs={columnDefs} text={"User"} hideGetSelectedRowData={true}/>
             </div>
    )
}


export default Users;