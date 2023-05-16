import React from 'react';
import { Grid, Typography } from '@mui/material';

const DetailsFifa = () => {
  const game = {
    name: 'FIFA 23',
    platforms: 'PlayStation 5, Xbox Series X/S, PC',
    genre: 'Sports',
    modes: 'Single-player, Multiplayer',
    releaseDate: 'September 2022',
    about: 'FIFA 23 is the latest installment in the FIFA video game series, offering realistic football gameplay and a variety of game modes to enjoy.',
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">{game.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Platforms: {game.platforms}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Genre: {game.genre}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Modes: {game.modes}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Release Date: {game.releaseDate}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">About the Game: {game.about}</Typography>
      </Grid>
    </Grid>
  );
};

export default DetailsFifa;