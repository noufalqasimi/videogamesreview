import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddGames from './pages/AddGames'
import AllGames from './pages/AllGames'
import TopGames from './pages/TopGames'


function App() {
  return (
    <div>
     <BrowserRouter>    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allgames' element={<AllGames />} />
        <Route path='/addgames' element={<AddGames />} />
        <Route path='/topgames' element={<TopGames />} />
      </Routes>
     </BrowserRouter>
    <Header />
    </div>

    
  );
}

export default App;
