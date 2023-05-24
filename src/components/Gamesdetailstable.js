import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Gamesdetailstable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Game Poster</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          <TableRow>
            <TableCell>
              <img src="https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png" alt="FIFA23" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/Fifa23">FIFA 23</Link></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="https://i.pinimg.com/736x/31/96/c1/3196c14ef4255c0965436f0f85497fbb.jpg" alt="Assassin's Creed Valhalla" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/AssasinsCreed">Assassin's Creed Valhalla</Link></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="https://m.media-amazon.com/images/M/MV5BMzc2MzEzNjc4OV5BMl5BanBnXkFtZTgwOTQ4MTI1NjM@._V1_.jpg" alt="Call of Duty: Black Ops 4" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/BlackOps4">Call of Duty: Black Ops 4</Link></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="https://i.etsystatic.com/13367669/r/il/013579/3107621028/il_570xN.3107621028_hfi8.jpg" alt="Grand Theft Auto V" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/GTAV">Grand Theft Auto 5</Link></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="https://i.ebayimg.com/images/g/l~EAAOSw08Fe60Fv/s-l1600.jpg" alt="Fortnite" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/Fortnite">Fortnite</Link></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="https://cdn.europosters.eu/image/750/posters/the-last-of-us-key-art-i127761.jpg" alt="The Last of Us" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/TheLastOfUs">The last Of Us</Link></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="https://image.api.playstation.com/vulcan/ap/rnd/202111/2000/wZ31G6ToIH9otXTVHbg3I2Wl.png" alt="Uncharted" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/Uncharted">UnCharted</Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Gamesdetailstable;