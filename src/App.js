import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddGames from './pages/AddGames'
import TopGames from './pages/TopGames'
import Fifa23 from './Gamedetails/Fifa23'
import AssasinsCreed from './Gamedetails/AssasinsCreed'
import BlackOps4 from './Gamedetails/BlackOps4'
import Fortnite from './Gamedetails/Fortnite'
import GTAV from './Gamedetails/GTAV'
import TheLastOfUs from './Gamedetails/TheLastOfUs'
import Uncharted from './Gamedetails/Uncharted'
import AddReview from './pages/AddReview'

function App() {
  return (
    <div>
     <BrowserRouter>    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addgames' element={<AddGames />} />
        <Route path='/topgames' element={<TopGames />} />
        <Route path='/Fifa23' element={<Fifa23 />} />
        <Route path='/AssasinsCreed' element={<AssasinsCreed />} />
        <Route path='/BlackOps4' element={<BlackOps4 />} />
        <Route path='/Fortnite' element={<Fortnite />} />
        <Route path='/GTAV' element={<GTAV />} />
        <Route path='/TheLastOfUs' element={<TheLastOfUs />} />
        <Route path='/Uncharted' element={<Uncharted />} />
        <Route path='/AddReview' element={<AddReview />} />







      </Routes>


     </BrowserRouter>



    <Header />
    </div>

    
  );
}

export default App;
