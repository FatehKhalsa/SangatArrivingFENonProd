import React from 'react';
import { AgGridReact } from 'ag-grid-react';



class MTable extends React.Component{
    constructor(props){
    super(props);
    };

    
    render(){
     const{rowData, columnDefs} = this.props; 

    return(
        <div className="ag-theme-alpine" style={{height: 400, width: 800}}>
            <AgGridReact
            rowData={rowData} columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    )
    }
  };
export default MTable;