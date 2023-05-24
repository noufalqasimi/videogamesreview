import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const Fortnite = () => {
  const ratings = [
    { rating: 4.6, reviewer: 'Sarah Thompson' },
    { rating: 4.3, reviewer: 'Michael Wilson' },
    { rating: 4.9, reviewer: 'Emma Brown' },
  ];

  const FortnitePoster = 'https://i.ebayimg.com/images/g/l~EAAOSw08Fe60Fv/s-l1600.jpg';


  return (
    <Grid container justifyContent="center" spacing={3} marginTop={7}>
      <Grid item xs={12}>
        <Typography variant="h4">Fortnite</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={FortnitePoster} alt="Fortnite Poster" style={{ maxWidth: '80%' }} />
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
                <TableCell>Fortnite</TableCell>
                <TableCell>PlayStation 4, Xbox One, PC, Nintendo Switch</TableCell>
                <TableCell>Battle Royale, Sandbox</TableCell>
                <TableCell>Multiplayer</TableCell>
                <TableCell>July 2017</TableCell>
                <TableCell>
                  Fortnite is a popular battle royale game where players fight against each other in a constantly shrinking map. It also features a creative mode where players can build and explore.
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

export default Fortnite;