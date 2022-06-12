import React, { useState} from 'react';
import MTable from '../helper/materialTable';
import { useHistory } from "react-router-dom";
import {usersMockData} from '../../components/mockData/users';





const BabaJiAppt = (props) => {

    const history = useHistory();


    // const {asthan} = this.props; 

    const [rowData] = useState(usersMockData)
 
    const [columnDefs] = useState([
        { field: "Firstname", sortable: true, filter: true },
        { field: "Lastname" },
        { field: "City", sortable: true, filter: true },
        { field: "DOB" },
        { field: "FlightInfo"},
        { field: "AllergyInfo"},
    ]);

    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
                <button className="btn btn-primary">Add New Sangat</button>
            </div>
    <h3 style={{marginLeft: '42%'}}>Sangat Meeting BabaJi</h3>  
                <MTable rowData={rowData} columnDefs={columnDefs} text={"User"} hideGetSelectedRowData={true}/>
             </div>
    )


}

export default BabaJiAppt;