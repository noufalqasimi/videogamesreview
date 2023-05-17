import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Rating } from '@mui/material';

const AddReview = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions with the review data (e.g., submit to a backend API)

    // Reset the form fields
    setName('');
    setReview('');
    setRating(0);
  };

  return (
    <Grid container justifyContent="center" spacing={3} marginTop={7}>
      <Grid item xs={12}>
        <Typography variant="h4">Add Review</Typography>
      </Grid>
      <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleNameChange}
            margin="normal"
          />
          <TextField
            label="Review"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={review}
            onChange={handleReviewChange}
            margin="normal"
          />
          <Typography variant="h6" style={{ marginTop: '20px' }}>Rating</Typography>
          <Rating
            value={rating}
            precision={0.5}
            onChange={(event, newValue) => handleRatingChange(newValue)}
            style={{ marginBottom: '20px' }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Review
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddReview;