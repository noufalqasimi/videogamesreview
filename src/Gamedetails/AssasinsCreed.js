import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import AssassinsCreedValhallaPoster from '/Users/noufalqasimi/Desktop/reviewapp/videogames/src/Photos/assasincreed.jpeg';

const AssasinsCreed = () => {
  const ratings = [
    { rating: 4.8, reviewer: 'Mark Thompson' },
    { rating: 4.5, reviewer: 'Emily Johnson' },
    { rating: 4.7, reviewer: 'Alex Davis' },
  ];

  return (
    <Grid container justifyContent="center" spacing={3} marginTop={7}>
      <Grid item xs={12}>
        <Typography variant="h4">Assassin's Creed Valhalla</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={AssassinsCreedValhallaPoster} alt="Assassin's Creed Valhalla Poster" style={{ maxWidth: '80%' }} />
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
                <TableCell>Assassin's Creed Valhalla</TableCell>
                <TableCell>PlayStation 5, Xbox Series X/S, PC</TableCell>
                <TableCell>Action, Adventure</TableCell>
                <TableCell>Single-player</TableCell>
                <TableCell>November 2020</TableCell>
                <TableCell>
                  Assassin's Creed Valhalla takes you on a Viking adventure set in the Viking Age, where you'll lead your clan in raids and battles to conquer England.
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

export default AssasinsCreed;
