import React from "react";
import {AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


const Header = () => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <div>
            <React.Fragment>
            <AppBar sx={{background: '#E6CDB5'}}>
                <Toolbar>
                <SportsEsportsIcon/>
                <Typography sx={{fontsize: "1.5rem", paddingLeft: "1%"}}>The Gamers Hub</Typography>
                <Tabs textColor="inherit">
                    <Tab label = "Home"/>
                    <Tab label = "All Games"/>
                    <Tab label = "Add a Game" />
                    <Tab label = "Top Games"/>

                </Tabs>

                <Button sx={{marginLeft: 'auto'} } variant="outlined">Login</Button>
                <Button sx={{marginLeft: '10px'}} variant="outlined">Sign up</Button>

                </Toolbar>

            </AppBar>
             </React.Fragment>
        </div>
    )
}

export default Header;