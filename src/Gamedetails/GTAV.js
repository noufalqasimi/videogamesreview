import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const GTAV = () => {
  const ratings = [
    { rating: 4.8, reviewer: 'David Johnson' },
    { rating: 4.7, reviewer: 'Emily Davis' },
    { rating: 4.9, reviewer: 'Sophia Smith' },
  ];

  const GTAVPoster = 'https://i.etsystatic.com/13367669/r/il/013579/3107621028/il_570xN.3107621028_hfi8.jpg';


  return (
    <Grid container justifyContent="center" spacing={3} marginTop={7}>
      <Grid item xs={12}>
        <Typography variant="h4">Grand Theft Auto V</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={GTAVPoster} alt="Grand Theft Auto V Poster" style={{ maxWidth: '80%' }} />
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
                <TableCell>Grand Theft Auto V</TableCell>
                <TableCell>PlayStation 4, Xbox One, PC</TableCell>
                <TableCell>Action, Adventure</TableCell>
                <TableCell>Single-player, Multiplayer</TableCell>
                <TableCell>September 2013</TableCell>
                <TableCell>
                  Grand Theft Auto V is an open-world action-adventure game set in the fictional city of Los Santos. It features a compelling story and a vast open world to explore.
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
        <Link to="/AddReview">
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Add Review
        </Button>
      </Link>
      </Grid>
    </Grid>
  );
};

export default GTAV;