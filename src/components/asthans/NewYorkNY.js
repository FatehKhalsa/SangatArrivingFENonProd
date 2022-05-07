import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../helper/materialTable';



const NewYorkNYC = () =>{
    const history = useHistory();

    return (
         <>
       <h3 style={{marginLeft: '42%'}}>New York City USA Asthan</h3>  
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        </>
    )
}

export default NewYorkNYC;