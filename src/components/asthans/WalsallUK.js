import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../helper/materialTable';
import HostModal from '../modals/hostModal';
import {hostColumns, hostMockdata} from '../mockData/users'




const WalsallUK = () =>{
    const history = useHistory();

    const [rowData] = useState(hostMockdata);

    const [columnDefs] = useState(hostColumns);

    const[showAddHost, setAddHost] = useState(false);

    const addNewUser = (e) => {
        e.preventDefault();
        setAddHost(true);
    };

    return (
       <>
       {showAddHost && <HostModal/>}
       <h3 style={{marginLeft: '42%'}}>Walsall UK Asthan</h3>  
       <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        <button className="btn btn-primary" onClick={(e)=>addNewUser(e)}>Add New Host</button>
        </div>
        <div style={{marginTop: "2%"}}>
         <MTable rowData={rowData} columnDefs={columnDefs} text={"User"} hideGetSelectedRowData={true}/>
         </div>
        </>
    )
}

export default WalsallUK;