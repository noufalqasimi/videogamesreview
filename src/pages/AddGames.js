import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

const AddGames = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Game Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Platforms" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Genre" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Modes" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Release Date" type="date" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="About the Game" multiline rows={4} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddGames;