import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography} from '@mui/material';
import { Link } from 'react-router-dom';



const TopGames = () => {
  // Define the games array with their details
  const games = [
    { name: 'FIFA 23', rating: 4.5, poster: 'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png' },
    { name: "Assassin's Creed Valhalla", rating: 4.8, poster: 'https://i.pinimg.com/736x/31/96/c1/3196c14ef4255c0965436f0f85497fbb.jpg' },
    { name: 'Call of Duty: Black Ops 4', rating: 4.2, poster: 'https://m.media-amazon.com/images/M/MV5BMzc2MzEzNjc4OV5BMl5BanBnXkFtZTgwOTQ4MTI1NjM@._V1_.jpg' },
    { name: 'Grand Theft Auto 5', rating: 4.7, poster: 'https://i.etsystatic.com/13367669/r/il/013579/3107621028/il_570xN.3107621028_hfi8.jpg' },
    { name: 'Fortnite', rating: 4.1, poster: 'https://i.ebayimg.com/images/g/l~EAAOSw08Fe60Fv/s-l1600.jpg' },
    { name: 'The Last of Us', rating: 4.9, poster: 'https://cdn.europosters.eu/image/750/posters/the-last-of-us-key-art-i127761.jpg' },
    { name: 'Uncharted', rating: 4.6, poster: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/2000/wZ31G6ToIH9otXTVHbg3I2Wl.png' },
  ];

  // Sort the games based on ratings in descending order
  const sortedGames = games.sort((a, b) => b.rating - a.rating);

  return (
   
    <Grid container justifyContent="center" style={{ paddingTop: '90px' }}>
      <Grid item xs={8}><Typography
          variant="h4" // Adjust the variant to control the size and style (e.g., h1, h2, h3, etc.)
          sx={{
            fontWeight: 'bold', // Make the text bold
            fontFamily: 'Lucida Handwriting', // Apply the Lucida Handwriting font
            color: '#808080' // Set the text color to blue
          }}
        >
Top Games        </Typography></Grid>
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