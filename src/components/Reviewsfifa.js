import React from 'react';
import { Grid, Typography, Rating } from '@mui/material';

const ReviewsFifa = [
  { name: 'John Doe', rating: 4, comment: 'Great game!' },
  { name: 'Jane Smith', rating: 5, comment: 'Best FIFA ever!' },
  { name: 'Mike Johnson', rating: 3, comment: 'Decent gameplay.' },
];

const Reviewsfifa = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Reviews</Typography>
      </Grid>
      {ReviewsFifa.map((review, index) => (
        <Grid item xs={12} key={index}>
          <Typography variant="subtitle1">{review.name}</Typography>
          <Rating value={review.rating} readOnly />
          <Typography variant="body1">{review.comment}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Reviewsfifa;