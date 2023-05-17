import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import TheLastOfUsPoster from '/Users/noufalqasimi/Desktop/reviewapp/videogames/src/Photos/thelastofus.jpeg'; 

const TheLastOfUs = () => {
  const ratings = [
    { rating: 4.9, reviewer: 'Emily Johnson' },
    { rating: 5.0, reviewer: 'Daniel Thompson' },
    { rating: 4.8, reviewer: 'Sophia Davis' },
  ];

  return (
    <Grid container justifyContent="center" spacing={3} marginTop={7}>
      <Grid item xs={12}>
        <Typography variant="h4">The Last of Us</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={TheLastOfUsPoster} alt="The Last of Us Poster" style={{ maxWidth: '80%' }} />
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
                <TableCell>The Last of Us</TableCell>
                <TableCell>PlayStation 4</TableCell>
                <TableCell>Action, Adventure</TableCell>
                <TableCell>Single-player</TableCell>
                <TableCell>June 2013</TableCell>
                <TableCell>
                  The Last of Us is a post-apocalyptic action-adventure game that follows the journey of two survivors, Joel and Ellie, as they navigate a dangerous world filled with infected creatures and hostile humans.
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

export default TheLastOfUs;