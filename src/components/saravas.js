import React, {useState} from 'react';
import MTable from './helper/materialTable';
import { useHistory } from "react-router-dom";




const Saravas  = () => {

    const history = useHistory();


        const [rowData] = useState([
            {Name: "Namm Nivas", Capacity: "500", Remaining: "300", Full:"No", id: '1'},
            {Name: "Sehaj Nivas", Capacity: "500", Remaining: "250", Full:"No", id: '1'},
            {Name: "Gol Sarava", Capacity: "150", Remaining: "0", Full:"Yes", id: '1'},
        ])
     
        const [columnDefs] = useState([
            { field: "Name", sortable: true },
            { field: "Capacity" },
            { field: "Remaining", sortable: true, filter: true },
            { field: "Full"},
        ]);     
    
        return(
            <div>
               <div style={{display: 'flex', justifyContent: 'start', marginBottom: '10px'}}>
                <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
                <h3 style={{marginLeft: '25%'}}>Sarava List</h3>  
            </div>
             <MTable rowData={rowData} columnDefs={columnDefs} />
            </div>
        )
    
}


export default Saravas;