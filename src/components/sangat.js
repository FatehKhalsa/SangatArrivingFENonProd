import React, { useState, useEffect } from 'react';
import MTable from './helper/materialTable';
import { useHistory } from "react-router-dom";
import AddEditUser from './addEditUserForm';
import { sangatVistingGurpurab, taxiReport, returnSangatReport, arrivalReport } from './mockData/users'
import { HerokuURL } from '../constants';
import { authenticationService } from '../userAuthMocks';
import { Button, Grid, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';

const TableView = {
    ALL: "All",
    ARRIVAL: "Arrival",
    RETURN: "Return",
    TAXI: "Taxi"
}

const Sangat = (props) => {

    const history = useHistory();

    const Role = props.location.state;

    const [users, setUsers] = useState([])
    const [columnDefs, setColumnDefs] = useState(sangatVistingGurpurab);
    const [showAddEditDialog, setShowAddEditDialog] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});
    const [view, setView] = useState(TableView.ALL);


    const handleEditUser = (selectedUser) => {
        setUserToEdit(selectedUser);
        setShowAddEditDialog(true);
    }
    const handleTableViewChange = (event, newView) => {
        switch (newView) {
            case TableView.ALL:
                setColumnDefs(sangatVistingGurpurab)
                break;
            case TableView.ARRIVAL:
                setColumnDefs(arrivalReport)
                break;
            case TableView.RETURN:
                setColumnDefs(returnSangatReport)
                break;
            case TableView.TAXI:
                setColumnDefs(taxiReport)
                break;
        }
        setView(newView);
    }

    useEffect(() => {
        console.log("#### use effect");
        fetch(`${HerokuURL}api/getAllUsers`, { headers: { "x-access-token": localStorage.getItem('accessToken') } }).then(res => res.json()).then(jsonRes => setUsers(jsonRes))
    }, []);
    if (users && users.message === "Unauthorized!") {
        authenticationService.logout();
        history.push('/');
        window.location.reload();
    }

    const addNewUser = () => {
        setUserToEdit({})
        setShowAddEditDialog(true);
    }

    const handleCloseModalCallback = () => {
        setUserToEdit({});
        setShowAddEditDialog(false);
    }

    const routeToPage = (route) => {
        history.push({
            pathname: `/${route}`,
            state: data
        });
    }

    console.log("Role", Role);

    return (
        <div>

            {showAddEditDialog && <AddEditUser handleCloseCallback={handleCloseModalCallback} user={userToEdit} />}

            <Grid container direction="row"
                justifyContent="flex-end"
                alignItems="center" spacing={2}>
                <Grid item justifyContent="flex-end" xs={2}>
                    <Button style={{ float: "right", marginRight: "10px" }} onClick={() => addNewUser()} variant="contained">Add Sangat</Button>
                </Grid>

            </Grid>
            <Paper sx={{ m: 1, p: 2 }}>
                <Grid container rowSpacing={1}>
                    <Grid item container xs={12} justifyContent="center">
                        <ToggleButtonGroup
                            variant="contained"
                            color="primary"
                            value={view}
                            exclusive
                            onChange={handleTableViewChange}
                            size='small'
                        >
                            <ToggleButton value={TableView.ALL}>All Sangat</ToggleButton>
                            <ToggleButton value={TableView.ARRIVAL}>Arrival</ToggleButton>
                            <ToggleButton value={TableView.RETURN}>Return</ToggleButton>
                            <ToggleButton value={TableView.TAXI}>Taxi Report</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>

                <MTable editing={showAddEditDialog} selectRowCallback={handleEditUser} rowData={users} columnDefs={columnDefs} text={"Sangat Gurpurab"} hideGetSelectedRowData={true} />
            </Paper>
        </div>
    )

}


export default Sangat;