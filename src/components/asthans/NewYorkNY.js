import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../helper/materialTable';
import {hostColumns, hostMockdata} from '../mockData/users'




const NewYorkNYC = () =>{
    const history = useHistory();

    const [rowData] = useState(hostMockdata);

    const [columnDefs] = useState(hostColumns);

    return (
         <>
       <h3 style={{marginLeft: '42%'}}>New York City USA Asthan</h3>  
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        <div style={{marginTop: "2%"}}>
         <MTable rowData={rowData} columnDefs={columnDefs} text={"User"} hideGetSelectedRowData={true}/>
         </div>
        </>
    )
}

export default NewYorkNYC;