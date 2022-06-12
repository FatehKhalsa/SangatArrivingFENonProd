import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../../helper/materialTable';
import {hostColumns, hostMockdata} from '../../mockData/users'
import AddNewHost from '../../modals/addNewHost';



const FresnoHost = () =>{
    const history = useHistory();

    const [rowData] = useState(hostMockdata);

    const [columnDefs] = useState(hostColumns);

    const [showHost, setShowHost] = useState(false);

    const addNewHost = () => {
        setShowHost(true);
    }

    const asthan = 'Fresno';

    return (
        <>
        {showHost && <AddNewHost asthan={asthan}/>}
        <h3 style={{marginLeft: '42%'}}>Fresno USA Host</h3>  
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        <button className="btn btn-primary" onClick={()=>addNewHost()}>Add New Host</button>
        </div>
        <div style={{marginTop: "2%"}}>
         <MTable rowData={rowData} columnDefs={columnDefs} text={"User"} hideGetSelectedRowData={true}/>
         </div>
        </>
    )
}

export default FresnoHost;