import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useQuery } from 'react-query';
import Particles from 'particlesjs';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home/Home'));
const Projets = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function App({ isDev }) {
  // useQuery('isDev', () => isDev, {
  //   staleTime: 1000 * 60 * 60 * 24,
  //   cacheTime: 1000 * 60 * 60 * 24,
  // });

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  useEffect(() => {
    Particles.init({
      selector: '.background',
      color: ['#145da0', '#09fbba', '#1e84e3'],
      connectParticles: false,
      maxParticles: 1000,
      speed: 0.05,
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

App.propTypes = {
  isDev: PropTypes.bool.isRequired,
};
