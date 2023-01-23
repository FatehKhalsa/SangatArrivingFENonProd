import React, {  useState, useEffect } from 'react';
import MTable from './helper/materialTable';
import { useHistory } from "react-router-dom";
import AddEditUser from './addEditUserForm';
import { sangatVistingGurpurab, taxiReport, returnSangatReport, arrivalReport } from './mockData/users'
import { HerokuURL } from '../constants';
import { authenticationService } from '../userAuthMocks';
import { Backdrop, Button, CircularProgress, Grid, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';

const TableView = {
    ALL: "All",
    ARRIVAL: "Arrival",
    RETURN: "Return",
    TAXI: "Taxi"
}

const Sangat = (props) => {

    const history = useHistory();

    const Role = props.location.state;
    const currentUser = props.currentUser;

    const [users, setUsers] = useState([])
    const [columnDefs, setColumnDefs] = useState(sangatVistingGurpurab);
    const [showAddEditDialog, setShowAddEditDialog] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});
    const [view, setView] = useState(TableView.ALL);
    const [loading, setLoading] = useState(true);


    const handleEditUser = (selectedUser) => {
        if(Role!=='ROLE_USER'){
        setUserToEdit(selectedUser);
        setShowAddEditDialog(true);
        }
    }
    
    const saveUserCallBack = (updatedUser) => {
        const index = users.findIndex(row => row._id === updatedUser._id);
        const usersCopy = [...users];
        if (index >= 0) {
            usersCopy[index] = updatedUser;
        } else {
            usersCopy.push(updatedUser)
        }
        setUsers(usersCopy);
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
        setLoading(true);
        var url = "api/getUsersWithFlightInfo";
        if (view == TableView.ALL) {
            url = "api/getAllUsers";
        }

        fetch(`${HerokuURL}` + url, { headers: { "x-access-token": localStorage.getItem('accessToken') } }).then(res => res.json()).then(jsonRes => {
            setLoading(false);
            setUsers(jsonRes);
        })
    }, [view]);
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
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress />
            </Backdrop>
            {showAddEditDialog && <AddEditUser handleCloseCallback={handleCloseModalCallback} user={userToEdit} currentUser={currentUser} onSaveSuccessCallBack={saveUserCallBack} />}

            <Grid container direction="row"
                justifyContent="flex-end"
                alignItems="center" spacing={2}>
            {Role!=='ROLE_USER' &&
                <Grid item justifyContent="flex-end" xs={2}>
                    <Button style={{ float: "right", marginRight: "10px" }} onClick={() => addNewUser()} variant="contained">Add Sangat</Button>
                </Grid>
                }
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
                            <ToggleButton value={TableView.ARRIVAL}>Arrival Report</ToggleButton>
                            <ToggleButton value={TableView.RETURN}>Return Report</ToggleButton>
                            <ToggleButton value={TableView.TAXI}>Taxi Report</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>

                <MTable editing={showAddEditDialog} selectRowCallback={handleEditUser} rowData={users} columnDefs={columnDefs} text={"Sangat Gurpurab"} hideGetSelectedRowData={true} onSaveSuccessCallBack={saveUserCallBack} />
            </Paper>
        </div>
    )

}


export default Sangat;