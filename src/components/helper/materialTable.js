import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import _ from 'lodash';
import User from '../user';


class MTable extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        userSelected: {},
        showModal: false,
        addUser: false,
        refreshList: false,
    }
    };

    getSelectedRowData = () => {
        let selectedNodes = this.gridApi.getSelectedNodes();
        let selectedData = selectedNodes.map((node) => node.data);
        !_.isEmpty(selectedNodes) && this.setState({userSelected: selectedData, showModal: true}, ()=>{console.log(this.state)});
        return selectedData;
      };

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    resetComponent = () => {
        console.log('Clicked')
        // this.setState({refreshList: true})
    }
    

    
    render(){
     const{rowData, columnDefs, text, customWidth} = this.props; 

     const {showModal, userSelected} = this.state;

    return(
        <React.Fragment>
        {showModal && <User userSelected={userSelected} resetComponent={this.resetComponent}/>}
        <div style={{ width:'95vw', height: '10vh' }}>
        <button onClick={this.getSelectedRowData} style={{ margin: '10 0'}} className="btn btn-secondary">
          Get Selected {text}
        </button>
        </div>
        <div className="ag-theme-alpine" style={{height: 400, width: customWidth? customWidth: 'auto'}}>
            <AgGridReact
            rowData={rowData} columnDefs={columnDefs} onGridReady={this.onGridReady} rowSelection="single">
            </AgGridReact>
        </div>
        </React.Fragment>
    )
    }
  };
export default MTable;