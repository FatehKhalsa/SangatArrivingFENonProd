import React, {useState} from 'react';
import MTable from './helper/materialTable';
import { useHistory } from "react-router-dom";




const Users  = () => {

    const history = useHistory();
  

    const [rowData] = useState([
        {Firstname: "Manjodh", Lastname: "Chahal", City: "Fresno", DOB:"10/23/89", id: '1'},
        {Firstname: "Amanjodh", Lastname: "Chahal", City: "Surrey", DOB:"10/23/89", id: '2'},
        {Firstname: "Singh", Lastname: "Singh", City: "Calgary", DOB:"10/23/89", id: '3'},
    ])
 
    const [columnDefs] = useState([
        { field: "Firstname", sortable: true },
        { field: "Lastname" },
        { field: "City", sortable: true, filter: true },
        { field: "DOB" },
    ]);     

    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'start', marginBottom: '10px'}}>
                <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
                <h3 style={{marginLeft: '25%'}}>Sangat List</h3>  
            </div>
                <MTable rowData={rowData} columnDefs={columnDefs} />
             </div>
    )
}


export default Users;