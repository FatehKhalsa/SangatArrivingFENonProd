import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../../helper/materialTable';
import {hostColumns, hostMockdata} from '../../mockData/users'
import AddNewHost from '../../modals/addNewHost';
import {HerokuURL} from '../../../constants';




const FresnoHost = () =>{
    const history = useHistory();

    // const [rowData] = useState(hostMockdata);

    // const [columnDefs] = useState(hostColumns);

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
        { field: "Host_Availability.Rooms", filter: true },
        { field: "Host_Availability.Beds", filter: true },
        { field: "Host_Availability.Slots", filter: true },
        { field: "Host_Distance", sortable: true, filter: true },
        { field: "Restrictions", sortable: true, filter: true },
        { field: "ProvidingRide", sortable: true, filter: true },


        // { field: "City", sortable: true, filter: true },
        // { field: "canHoldSangat", cellStyle: params => {if(params.value==='Yes') {return {color: 'green'};} return {color: 'red'}}},
        // { field: "HowManyBedsRemaining", cellStyle: params => {if(params.value==='0') {return {color: 'red'};} return {color: 'green'}}},
        // { field: "DistanceFromDarbarSahib"},
    ]
    
    
    // const hostMockdata = [
    //         {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "3", DistanceFromDarbarSahib:"None", id: '1'},
    //         {HostFirstName: "Aman", HostLastName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "5", DistanceFromDarbarSahib:"None", id: '1'},
    //         {HostFirstName: "Surinder", HostLastName: "singh", City: "Delta", canHoldSangat:"No", HowManyBedsRemaining: "0", DistanceFromDarbarSahib:"None", id: '1'},
    //         {HostFirstName: "Tanveer", HostLastName: "singh", City: "Langley", canHoldSangat:"Yes", HowManyBedsRemaining: "83", DistanceFromDarbarSahib:"None", id: '1'},
    //         {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "Richmond", canHoldSangat:"Yes", HowManyBedsRemaining: "2", DistanceFromDarbarSahib:"None", id: '1'},
    //         {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "New Westminster", canHoldSangat:"Yes", HowManyBedsRemaining: "5", DistanceFromDarbarSahib:"None", id: '1'},
    //         {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "Surrey", canHoldSangat:"Yes", HowManyBedsRemaining: "3", DistanceFromDarbarSahib:"None", id: '1'},
    //         {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "Delta", canHoldSangat:"No", HowManyBedsRemaining: "0", DistanceFromDarbarSahib:"None", id: '1'},
    //         {HostFirstName: "Manjodh", HostLastName: "Chahal", City: "White Rock", canHoldSangat:"No", HowManyBedsRemaining: "10", DistanceFromDarbarSahib:"None", id: '1'},
    
    // ]

    // {
    //     "Host_Address": {
    //         "HouseNumber": 2685,
    //         "StreetName": "N Hornet Ave",
    //         "City": "Fresno",
    //         "State": "CA",
    //         "Country": "USA"
    //     },
    //     "Host_Availability": {
    //         "Rooms": 2,
    //         "Beds": 4,
    //         "Slots": 5
    //     },
    //     "_id": "62a586a3bf620a6152d8ff31",
    //     "Host_Name": "Manjodh Singh Chahal",
    //     "Host_Distance": 0,
    //     "Restrictions": "None",
    //     "ProvidingRide": "Yes",
    //     "Host_at_asthan": "Fresno",
    //     "__v": 0
    // }

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