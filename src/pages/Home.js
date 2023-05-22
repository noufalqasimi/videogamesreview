import React from 'react';
import { Grid, Typography } from '@mui/material';
import Gamesdetailstable from '../components/Gamesdetailstable.js';

const Home = () => {
  return (
    <div>
      
      
    <Grid container justifyContent="center" style={{ marginTop: '90px', minHeight: '100vh' }} alignItems="center" >
     {/* <Grid item xs={12} style={{ marginBottom: '10px' }}>
    </Grid>  */}

<Grid item xs={8}>
        <Typography
          variant="h4" // Adjust the variant to control the size and style (e.g., h1, h2, h3, etc.)
          sx={{
            fontWeight: 'bold', // Make the text bold
            fontFamily: 'Lucida Handwriting', // Apply the Lucida Handwriting font
            color: '#808080' // Set the text color to blue
          }}
        >
Home        </Typography>
    </Grid>


    <Grid item xs={8} style={{ paddingTop: '20px' }}>
     <Gamesdetailstable/>
    </Grid>


  </Grid>


    </div>
  );
};

export default Home;