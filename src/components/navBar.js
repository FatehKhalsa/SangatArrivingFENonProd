import * as React from 'react';
import { AppBar, Button } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function NavBar(props) {
    const { user, logoutCallback } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(false);
    
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"

                    >
                        <SelfImprovementIcon fontSize='large' />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        Sangat Arrival System
                        
                    </Typography>
                    

                    {user && (<div>
                        <Button variant="text" sx={{ color: "white" }} onClick={handleOpenMenu} startIcon={<AccountCircle />}>
                            {user}
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            keepMounted
                            open={openMenu}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={logoutCallback}>Logout</MenuItem>
                        </Menu>
                    </div>)}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
