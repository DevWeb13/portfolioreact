import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Header = lazy(() => import('./components/Header/Header'));
const Home = lazy(() => import('./pages/Home/Home'));
const Projets = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Loading = lazy(() => import('./components/Loading/Loading'));

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
