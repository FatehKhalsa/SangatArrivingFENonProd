import React, {useState} from 'react';
import MTable from '../helper/materialTable';
import { useHistory } from "react-router-dom";
import {taxiReport} from '../mockData/users'




const ArriveSangatReport  = (props) => {

    const history = useHistory();

    const [columnDefs] = useState(taxiReport);

        return(
            <div>
               <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
                </div>
                <div style={{textAlign: "Right"}}>
                </div>
            <h3 style={{marginLeft: '30%'}}>Arriving Sangat Report </h3>  
                <MTable rowData={props.location.state} columnDefs={columnDefs} text={"Sangat Gurpurab"} hideGetSelectedRowData={true}/>
            </div>
        )
    
}


export default ArriveSangatReport;