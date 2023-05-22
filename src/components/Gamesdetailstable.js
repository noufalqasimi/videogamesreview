import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';


import FIFA23 from '../Photos/fifa23.jpeg';
import AssassinsCreedValhalla from '../Photos/assasincreed.jpeg';
import CallOfDutyBlackOps4 from '../Photos/blackops4.jpg';
import Fortnite from '../Photos/fortnite.jpeg';
import GTAV from '../Photos/GTAV.jpg';
import TheLastOfUs from '../Photos/thelastofus.jpeg';
import Uncharted from '../Photos/uncharted.jpeg';

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
              <img src={FIFA23} alt="FIFA23" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/Fifa23">FIFA 23</Link></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src={AssassinsCreedValhalla} alt="Assassin's Creed Valhalla" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/AssasinsCreed">Assassin's Creed Valhalla</Link></TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src={CallOfDutyBlackOps4} alt="Call of Duty: Black Ops 4" style={{ maxHeight: '50%', maxWidth: '50%' }} />
            </TableCell>
            <TableCell><Link to="/BlackOps4">Call of Duty: Black Ops 4</Link></TableCell>
          </TableRow>

          <TableRow>
          <TableCell>
            <img src={GTAV} alt="Grand Theft Auto V" style={{ maxHeight: '50%', maxWidth: '50%' }} />
          </TableCell>
          <TableCell><Link to="/GTAV">Grand Theft Auto 5</Link></TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <img src={Fortnite} alt="Fortnite" style={{ maxHeight: '50%', maxWidth: '50%' }} />
          </TableCell>
          <TableCell><Link to="/Fortnite">Fortnite</Link></TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <img src={TheLastOfUs} alt="The Last of Us" style={{ maxHeight: '50%', maxWidth: '50%' }} />
          </TableCell>
          <TableCell><Link to="/TheLastOfUs">The last Of Us</Link></TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <img src={Uncharted} alt="Uncharted" style={{ maxHeight: '50%', maxWidth: '50%' }} />
          </TableCell>
          <TableCell><Link to="/Uncharted"> UnCharted </Link></TableCell>
        </TableRow>






        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default Gamesdetailstable;