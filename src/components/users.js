import React, {useState, useEffect} from 'react';
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
    
    // const [data, setState] = useState([])
    // useEffect(()=>{
    //     fetch("https://www.ag-grid.com/example-assets/olympic-winners.json").then(res=>setState(res.data))
    // },  console.log("Data fetched", data));

   

    // const [columnDefs] = useState([
    //     { field: 'athlete', minWidth: 150 },
    //     { field: 'age', maxWidth: 90 },
    //     { field: 'country', minWidth: 150 },
    //     { field: 'year', maxWidth: 90 },
    //     { field: 'date', minWidth: 150 },
    //     { field: 'sport', minWidth: 150 },
    //     { field: 'gold' },
    //     { field: 'silver' },
    //     { field: 'bronze' },
    //     { field: 'total' },
    // ]);

    // const [defaultColDef] = useState({
    //     flex: 1,
    //     midWidth: 100,
    // });

    // const [rowSelection] = useState('multiple');
    // const [rowData] = useState(null)

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