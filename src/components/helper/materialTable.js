import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import User from '../user';



class MTable extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        userSelected: {},
        showModal: false,
    }
    };

    getSelectedRowData = () => {
        let selectedNodes = this.gridApi.getSelectedNodes();
        let selectedData = selectedNodes.map((node) => node.data);
        this.setState({userSelected: selectedData, showModal: true});
        return selectedData;
      };

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    

    
    render(){
     const{rowData, columnDefs} = this.props; 

     const {showModal, userSelected} = this.state;

    return(
        <React.Fragment>
        {showModal && <User userSelected={userSelected}/>}
        <div style={{ width: '95vw', height: '10vh' }}>
        <button onClick={this.getSelectedRowData} style={{ margin: '10 0'}} className="btn btn-secondary">
          Get User Selected
        </button>
        </div>
        <div className="ag-theme-alpine" style={{height: 400, width: 800}}>
            <AgGridReact
            rowData={rowData} columnDefs={columnDefs} onGridReady={this.onGridReady} rowSelection="single">
            </AgGridReact>
        </div>
        </React.Fragment>
    )
    }
  };
export default MTable;