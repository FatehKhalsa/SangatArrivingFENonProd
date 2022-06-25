import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../../helper/materialTable';
import {hostColumns, hostMockdata} from '../../mockData/users'
import AddNewHost from '../../modals/addNewHost';
import {HerokuURL} from '../../../constants';




const FresnoHost = () =>{
    const history = useHistory();

    const [showHost, setShowHost] = useState(false);

    const addNewHost = () => {
        setShowHost(true);
    }

    const [data, setState] = useState([])
    useEffect(()=>{
        fetch(`${HerokuURL}api/getAllHosts`, { headers: {"x-access-token" : localStorage.getItem('accessToken')} }).then(res=>res.json()).then(jsonRes=>setState(jsonRes))
    }, []);

    const asthan = 'Fresno';

    console.log(data);

    const hostColumns = [
        { field: "Host_Name", sortable: true, filter: true },
        { field: "Host_Address.HouseNumber", filter: true },
        { field: "Host_Address.StreetName", filter: true },
        { field: "Host_Address.City", filter: true },
        { field: "Host_Address.Country", filter: true },
        { field: "Host_Availability.Rooms", filter: true, cellStyle: params => {if(params.value>0) {return {color: 'green'};} return {color: 'red'}} },
        { field: "Host_Availability.Beds", filter: true, cellStyle: params => {if(params.value>0) {return {color: 'green'};} return {color: 'red'}}},
        { field: "Host_Availability.Slots", filter: true, cellStyle: params => {if(params.value>0) {return {color: 'green'};} return {color: 'red'}} },
        { field: "Host_Distance", sortable: true, filter: true },
        { field: "Restrictions", sortable: true, filter: true },
        { field: "ProvidingRide", sortable: true, filter: true },
    ];

    return (
        <>
        {showHost && <AddNewHost asthan={asthan}/>}
        <h3 style={{marginLeft: '42%'}}>Fresno USA Host</h3>  
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        <button className="btn btn-primary" onClick={()=>addNewHost()}>Add New Host</button>
        </div>
        <div style={{marginTop: "2%"}}>
         <MTable rowData={data} columnDefs={hostColumns} text={"User"} hideGetSelectedRowData={true}/>
         </div>
        </>
    )
}

export default FresnoHost;