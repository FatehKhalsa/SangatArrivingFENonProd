import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import MTable from '../helper/materialTable';



const Malaysia = () =>{
    const history = useHistory();

    return (
        <>
       <h3 style={{marginLeft: '42%'}}>Malaysia Asthan</h3>  
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        </>
    )
}

export default Malaysia;