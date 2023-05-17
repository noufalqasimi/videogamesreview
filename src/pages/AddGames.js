import React from 'react';
import { Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from '@mui/material';

const AddGames = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent="center" style={{ marginTop: '90px' }}>
      <Grid item xs={8}>
        <Typography
          variant="h4" // Adjust the variant to control the size and style (e.g., h1, h2, h3, etc.)
          sx={{
            fontWeight: 'bold', // Make the text bold
            fontFamily: 'Lucida Handwriting', // Apply the Lucida Handwriting font
            color: '#808080' // Set the text color to blue
          }}
        >
          Add a Game
        </Typography>
    </Grid>


    <Grid item xs={8} style={{ paddingTop: '20px' }}>
    
      <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField label="Game Name" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField label="Platforms" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField label="Genre" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField label="Modes" fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField label="Release Date" type="date" fullWidth />
                </TableCell>
                <TableCell>
                  <TextField label="About the Game" multiline rows={4} fullWidth />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <input type="file" accept="image/*" style={{ display: 'none' }} />
                  <label htmlFor="upload-photo">
                    <Button variant="contained" component="span">
                      Add game poster
                    </Button>
                  </label>
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" type="submit">Submit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>

      </Grid>
    </form>
  );
};

export default AddGames;