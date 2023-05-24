import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const Uncharted = () => {
  const ratings = [
    { rating: 4.7, reviewer: 'Sarah Adams' },
    { rating: 4.9, reviewer: 'Michael Roberts' },
    { rating: 4.8, reviewer: 'Olivia Wilson' },
  ];

  const UnchartedPoster = 'https://image.api.playstation.com/vulcan/ap/rnd/202111/2000/wZ31G6ToIH9otXTVHbg3I2Wl.png';


  return (
    <Grid container justifyContent="center" spacing={3} marginTop={7}>
      <Grid item xs={12}>
        <Typography variant="h4">Uncharted</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={UnchartedPoster} alt="Uncharted Poster" style={{ maxWidth: '80%' }} />
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
                <TableCell>Uncharted</TableCell>
                <TableCell>PlayStation</TableCell>
                <TableCell>Action-Adventure</TableCell>
                <TableCell>Single-player</TableCell>
                <TableCell>November 2007</TableCell>
                <TableCell>
                  Uncharted is a critically acclaimed action-adventure game series that follows the adventures of Nathan Drake as he explores ancient ruins, solves puzzles, and battles enemies in search of hidden treasures.
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

export default Uncharted;