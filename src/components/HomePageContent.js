import React from 'react';
import { Grid, Typography } from '@mui/material';
import FIFA23 from '/Users/noufalqasimi/Desktop/reviewapp/videogames/src/Photos/fifa23.jpeg';
import Reviewsfifa from './Reviewsfifa';
import DetailsFifa from './DetailsFifa';

const HomePageContent = () => {
  

  return (
    <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={4} style={{ marginBottom: '10px' }}>
      <img
        img src={FIFA23} alt="FIFA23"
        style={{ width: '100%', height: 'auto' }}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={8} style={{ paddingTop: '20px' }}>
      <DetailsFifa/>
        
      <Reviewsfifa/>
    </Grid>
  </Grid>
  );
};

export default HomePageContent;