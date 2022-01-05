import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Crews from './components/routes/Crews/Crews';
import Destination from './components/routes/Destination/Destination';
import Home from './components/routes/Home/Home';
import PageNotFound from './components/routes/PageNotFound/PageNotFound';
import Technology from './components/routes/Technology/Technology';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crews />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
