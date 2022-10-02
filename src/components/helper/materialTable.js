import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import _ from 'lodash';
import AddEditUser from '../addEditUserForm';
import HostModal from '../modals/hostModal';
import DownloadIcon from '@mui/icons-material/Download';
import { Button, Grid, TextField } from '@mui/material'


class MTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: {},
      showModal: false,
      addUser: false,
      refreshList: false,
      loadModel: '',
    }
  };


  onGridReady = (params) => {
    this.gridApi = params.api;
    // this.gridApi.setDomLayout('autoHeight');
    this.gridColumnApi = params.columnApi;
  }

  mapModel = (modelToMap) => {
    console.log("Check Switch ", modelToMap)
    if (modelToMap === 'user_firstName') {
      this.setState({ loadModel: 'User' })
    }
    else if (modelToMap === 'Host_Availability') {
      this.setState({ loadModel: 'Host' })
    }
  }

  onBtExport = () => {
    var today = new Date();
    this.gridApi.exportDataAsCsv({ fileName: today + 'version.csv', prependContent: 'Export Generated On:' + today });
  };

  onFilterTextBoxChanged = (e) => {
    this.gridApi.setQuickFilter(
      e.target.value
    );
  };

  selectionChanged = (event) => {
    let selectedNodes = this.gridApi.getSelectedNodes();
    if (selectedNodes.length > 0) {
      this.props.selectRowCallback(selectedNodes[0].data)
    }
  }


  render() {
    const { rowData, columnDefs, text, customWidth, hideGetSelectedRowData } = this.props;

    const { showModal, userSelected, loadModel } = this.state;

    console.log('State', loadModel);

    return (
      <React.Fragment>
        {showModal && (loadModel === 'User' ? <AddEditUser user={userSelected[0]} /> : (loadModel === 'Host' && <HostModal userSelected={userSelected} />))}
        <Grid container sx={{ mb: 1, mt:1 }}
        spacing={2}
          direction={{xs: "column", sm:"row"}}
          justifyContent="space-between"
          alignItems="center">
          <Grid item >

            <TextField size="small" onChange={this.onFilterTextBoxChanged} label="Search" variant="outlined" />
          </Grid>
          <Grid item>Total Sangat: {rowData && rowData.length > 0 ? rowData.length : 0}</Grid>
          <Grid item >
            <Button variant="outlined" onClick={() => this.onBtExport()} startIcon={<DownloadIcon />}>
              Download
            </Button>
          </Grid>
        </Grid>
        {/* <div className="ag-theme-alpine" > */}
        <div className="ag-theme-alpine" style={{ height: '400px', width: customWidth ? customWidth : 'auto' }}>
          <AgGridReact
            onSelectionChanged={this.selectionChanged} rowData={rowData} columnDefs={columnDefs} onGridReady={this.onGridReady} rowSelection="single" paginationPageSize="25" >
          </AgGridReact>
        </div>
      </React.Fragment>
    )
  }
};
export default MTable;