import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import CallOfDutyBlackOps4Poster from '/Users/noufalqasimi/Desktop/reviewapp/videogames/src/Photos/blackops4.jpg'; 

const BlackOps4 = () => {
  const ratings = [
    { rating: 4.2, reviewer: 'Sarah Thompson' },
    { rating: 4.6, reviewer: 'Jason Davis' },
    { rating: 4.4, reviewer: 'Michelle Smith' },
  ];

  return (
    <Grid container justifyContent="center" spacing={3} marginTop={7}>
      <Grid item xs={12}>
        <Typography variant="h4">Call of Duty: Black Ops 4</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={CallOfDutyBlackOps4Poster} alt="Call of Duty: Black Ops 4 Poster" style={{ maxWidth: '80%' }} />
      </Grid>
      <Grid item xs={5}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Platforms</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Modes</TableCell>
                <TableCell>Release Date</TableCell>
                <TableCell>About</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Call of Duty: Black Ops 4</TableCell>
                <TableCell>PlayStation 4, Xbox One, PC</TableCell>
                <TableCell>First-person shooter</TableCell>
                <TableCell>Single-player, Multiplayer</TableCell>
                <TableCell>October 2018</TableCell>
                <TableCell>
                  Call of Duty: Black Ops 4 is a multiplayer-focused first-person shooter game, featuring thrilling gameplay and a variety of multiplayer modes and maps.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h6" style={{ marginTop: '20px' }}>Ratings</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rating</TableCell>
                <TableCell>Reviewer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ratings.map((rating, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Rating value={rating.rating} precision={0.5} readOnly />
                  </TableCell>
                  <TableCell>{rating.reviewer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/add-review">
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Add Review
        </Button>
      </Link>
      </Grid>
    </Grid>
  );
};

export default BlackOps4;