import React, {useState, useEffect} from 'react';
import MTable from './helper/materialTable';
import {usersMockData} from '../components/mockData/users';

import { useHistory } from "react-router-dom";
import AddUser from './addUser';





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
    
    // const [data, setState] = useState([])
    // useEffect(()=>{
    //     fetch("https://www.ag-grid.com/example-assets/olympic-winners.json").then(res=>setState(res.data))
    // },  console.log("Data fetched", data));

   

    // const [columnDefs] = useState([
    //     { field: 'athlete', minWidth: 150 },
    //     { field: 'age', maxWidth: 90 },
    //     { field: 'country', minWidth: 150 },
    //     { field: 'year', maxWidth: 90 },
    //     { field: 'date', minWidth: 150 },
    //     { field: 'sport', minWidth: 150 },
    //     { field: 'gold' },
    //     { field: 'silver' },
    //     { field: 'bronze' },
    //     { field: 'total' },
    // ]);

    // const [defaultColDef] = useState({
    //     flex: 1,
    //     midWidth: 100,
    // });

    // const [rowSelection] = useState('multiple');
    // const [rowData] = useState(null)

    return(
        <div>
            {showUser && <AddUser/>}
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
                <button className="btn btn-primary" onClick={()=>addNewUser()}>Add New User</button>
            </div>
            <h3 style={{marginLeft: '42%'}}>Sangat List</h3>  
                <MTable rowData={rowData} columnDefs={columnDefs} text={"User"}/>
             </div>
    )
}


export default Users;