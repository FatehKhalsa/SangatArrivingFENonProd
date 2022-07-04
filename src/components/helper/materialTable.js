import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import _ from 'lodash';
import User from '../user';
import HostModal from '../modals/hostModal';


class MTable extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        userSelected: {},
        showModal: false,
        addUser: false,
        refreshList: false,
        loadModel: '',
    }
    };

    getSelectedRowData = () => {
        let selectedNodes = this.gridApi.getSelectedNodes();
        let selectedData = selectedNodes.map((node) => node.data);
        !_.isEmpty(selectedNodes) && this.setState({userSelected: selectedData, showModal: true}, ()=>{console.log(this.state)});
        this.mapModel(Object.keys(selectedData[0])[1]);
        return selectedData;
      };

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    mapModel = (modelToMap) => {
      console.log("Check Switch ",modelToMap)
        if(modelToMap==='user_firstName'){
          this.setState({loadModel: 'User'})
        }
        else if(modelToMap === 'Host_Availability'){
          this.setState({loadModel: 'Host'})
        }
    }
    

    
    render(){
     const{rowData, columnDefs, text, customWidth, hideGetSelectedRowData} = this.props; 

     const {showModal, userSelected, loadModel} = this.state;

     console.log('State', loadModel);

    return(
        <React.Fragment>
        {showModal && (loadModel ==='User'? <User userSelected={userSelected}/>: (loadModel==='Host' &&<HostModal userSelected={userSelected}/>))}
        <div style={{ width:'95vw', height: '10vh' }}>
        {hideGetSelectedRowData && <button onClick={this.getSelectedRowData} style={{ margin: '10 0'}} className="btn btn-secondary">
          Get Selected {text}
        </button>
        }
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