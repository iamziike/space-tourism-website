import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Crews from './components/routes/Crews/Crews';
import Destination from './components/routes/Destination/Destination';
import Home from './components/routes/Home/Home';
import PageNotFound from './components/routes/PageNotFound/PageNotFound';
import Technology from './components/routes/Technology/Technology';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crews />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
