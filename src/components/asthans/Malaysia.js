import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../helper/materialTable';
import {hostColumns, hostMockdata} from '../mockData/users'




const Malaysia = () =>{
    const history = useHistory();

    const [rowData] = useState(hostMockdata);

    const [columnDefs] = useState(hostColumns);

    const addNewUser = () => {

    };

    return (
        <>
       <h3 style={{marginLeft: '42%'}}>Malaysia Asthan</h3>
       <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        <button className="btn btn-primary" onClick={()=>addNewUser()}>Add New Host</button>
        </div>
        <div style={{marginTop: "2%"}}>
         <MTable rowData={rowData} columnDefs={columnDefs} text={"User"} hideGetSelectedRowData={true}/>
         </div>
        </>
    )
}

export default Malaysia;