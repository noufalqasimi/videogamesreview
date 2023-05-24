import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Rating, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const AddReview = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedGame, setSelectedGame] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions with the review data (e.g., submit to a backend API)
    axios
      .post("http://localhost:9876/AddReview", { username: name, reviewContent: review, reviewProduct: rating,gameId: selectedGame })
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });

    // Reset the form fields
    setName('');
    setReview('');
    setRating(0);
    setSelectedGame('');
  };

  // Array of game options
  const gameOptions = [
    { label: 'FIFA 23', value: 'fifa23', ID: 1 },
    { label: "Assassin's Creed Valhalla", value: 'assassinsCreed', ID: 2 },
    { label: 'Call of Duty: Black Ops 4', value: 'blackOps4' , ID: 3},
    { label: 'Grand Theft Auto 5', value: 'gtav', ID: 4 },
    { label: 'Fortnite', value: 'fortnite', ID: 5 },
    { label: 'The Last of Us', value: 'theLastOfUs',ID: 6},
    { label: 'Uncharted', value: 'uncharted', ID: 7 },
  ];

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
          {/* Game selection dropdown */}
          <FormControl variant="outlined" fullWidth margin="normal">
            <Select
              value={selectedGame}
              onChange={handleGameChange}
              displayEmpty
              renderValue={(value) => (value ? value : 'Select a game')}
            >
              {gameOptions.map((option) => (
                <MenuItem key={option.value} value={option.ID}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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