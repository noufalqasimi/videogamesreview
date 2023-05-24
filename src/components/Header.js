import React from "react";
import {AppBar, Box, Button, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Link from '@mui/material/Link';



const Header = () => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <div>
            <React.Fragment>
            <Box sx={{flexGrow: 1, paddingBottom: '75px'}}>
                <AppBar sx={{background: '#E6CDB5', marginBottom: '50px'}}>
                    <Toolbar>
                    <SportsEsportsIcon/>
                    <Typography sx={{fontsize: "1.5rem", paddingLeft: "1%"}}>The Gamers Hub</Typography>

                    <Button component={Link} href="/" color="inherit" className="Navbar-button">
                    Home </Button>

                    
                   <Link to= "/addgames"><Button  component={Link} color="inherit" className="Navbar-button">
                    Add Games </Button></Link>

                   
                    <Link to= "/topgames"><Button component={Link}  color="inherit" className="Navbar-button">
                    Top Games </Button></Link>
                    

                    </Toolbar>

                </AppBar>
            </Box>
             </React.Fragment>
        </div>
    )
}

export default Header;