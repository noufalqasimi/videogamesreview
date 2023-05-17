import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import FIFA23Poster from '/Users/noufalqasimi/Desktop/reviewapp/videogames/src/Photos/fifa23.jpeg'; 

const Fifa23 = () => {
  const ratings = [
    { rating: 4.5, reviewer: 'John Doe' },
    { rating: 3.8, reviewer: 'Jane Smith' },
    { rating: 5.0, reviewer: 'Mike Johnson' },
  ];

  return (
    <Grid container justifyContent="center" spacing={3} marginTop={7}>
      <Grid item xs={12}>
        <Typography variant="h4">FIFA 23</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={FIFA23Poster} alt="FIFA 23 Poster" style={{ maxWidth: '80%' }} />
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
                <TableCell>FIFA 23</TableCell>
                <TableCell>PlayStation 5, Xbox Series X/S, PC</TableCell>
                <TableCell>Sports</TableCell>
                <TableCell>Single-player, Multiplayer</TableCell>
                <TableCell>September 2022</TableCell>
                <TableCell>
                  FIFA 23 is the latest installment in the FIFA video game series, offering realistic football gameplay and a variety of game modes to enjoy.
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

export default Fifa23;