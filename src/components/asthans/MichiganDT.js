import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../helper/materialTable';
import {hostColumns, hostMockdata} from '../mockData/users'



const MichiganDT = () =>{
    const history = useHistory();

    const [rowData] = useState(hostMockdata);

    const [columnDefs] = useState(hostColumns);

    return (
        <>
        <h3 style={{marginLeft: '42%'}}>Michigan USA Asthan</h3>  
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        <div style={{marginTop: "2%"}}>
         <MTable rowData={rowData} columnDefs={columnDefs} text={"User"}/>
         </div>
        </>
    )
}

export default MichiganDT;