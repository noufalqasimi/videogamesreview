import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

import FIFA23 from '../Photos/fifa23.jpeg';
import AssassinsCreedValhalla from '../Photos/assasincreed.jpeg';
import CallOfDutyBlackOps4 from '../Photos/blackops4.jpg';
import Fortnite from '../Photos/fortnite.jpeg';
import GTAV from '../Photos/GTAV.jpg';
import TheLastOfUs from '../Photos/thelastofus.jpeg';
import Uncharted from '../Photos/uncharted.jpeg';

const TopGames = () => {
  // Define the games array with their details
  const games = [
    { name: 'FIFA 23', rating: 4.5, poster: FIFA23 },
    { name: "Assassin's Creed Valhalla", rating: 4.8, poster: AssassinsCreedValhalla },
    { name: 'Call of Duty: Black Ops 4', rating: 4.2, poster: CallOfDutyBlackOps4 },
    { name: 'Grand Theft Auto 5', rating: 4.7, poster: GTAV },
    { name: 'Fortnite', rating: 4.1, poster: Fortnite },
    { name: 'The Last of Us', rating: 4.9, poster: TheLastOfUs },
    { name: 'Uncharted', rating: 4.6, poster: Uncharted },
  ];

  // Sort the games based on ratings in descending order
  const sortedGames = games.sort((a, b) => b.rating - a.rating);

  return (
   
    <Grid container justifyContent="center" style={{ paddingTop: '90px' }}>
      <Grid item xs={8}><Typography>Top Games - Ratings</Typography></Grid>
    <Grid item xs={8}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Game Poster</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedGames.map((game) => (
              <TableRow key={game.name}>
                <TableCell>
                  <img src={game.poster} alt={game.name} style={{ maxHeight: '50%', maxWidth: '50%' }} />
                </TableCell>
                <TableCell>
                  <Link to={`/${game.name.replace(/\s+/g, '')}`}>{game.name}</Link>
                </TableCell>
                <TableCell>{game.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>



  );
};

export default TopGames;