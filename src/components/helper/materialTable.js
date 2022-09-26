import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import _ from 'lodash';
import AddEditUser from '../addEditUserForm';
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

    onBtExport = () => {
      var today = new Date();
      this.gridApi.exportDataAsCsv({fileName: today+'version.csv', prependContent: 'Export Generated On:' + today});
    };

    onFilterTextBoxChanged = () => {
      this.gridApi.setQuickFilter(
        document.getElementById('filter-text-box').value
      );
    };
    
    selectionChanged = (event) => {
      // TODO: open edit user form
    }

    
    render(){
     const{rowData, columnDefs, text, customWidth, hideGetSelectedRowData} = this.props; 

     const {showModal, userSelected, loadModel} = this.state;

     console.log('State', loadModel);

    return(
        <React.Fragment>
        {showModal && (loadModel ==='User'? <AddEditUser user={userSelected[0]}/> : (loadModel==='Host' &&<HostModal userSelected={userSelected}/>))}
        <div className="example-header">
        <input
              type="text"
              id="filter-text-box"
              placeholder="Search..."
              onInput={() => this.onFilterTextBoxChanged()}
            />
            </div>
        <button
              onClick={() => this.onBtExport()}
              style={{ marginBottom: '5px', fontWeight: 'bold', width: '338px' }}
            >
              Download current data view
            </button>
        <div style={{ width:'95vw', height: '12vh' }}>
        {hideGetSelectedRowData && <button onClick={this.getSelectedRowData} style={{ margin: '10 0'}} className="btn btn-secondary">
          Edit Selected Information {text}
        </button>
        }
        </div>
        <div className="ag-theme-alpine" style={{height: 400, width: customWidth? customWidth: 'auto'}}>
            <AgGridReact
            onSelectionChanged={this.selectionChanged} rowData={rowData} columnDefs={columnDefs} onGridReady={this.onGridReady} rowSelection="single">
            </AgGridReact>
        </div>
        </React.Fragment>
    )
    }
  };
export default MTable;