import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projets from './pages/Projets/Projets';
import Contact from './pages/Contact/Contact';
import Zelda from './pages/Zelda/Zelda';

function App() {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   console.log(document.location.pathname);
  //   if (window.location.pathname === '/zelda') {
  //     if (scrollRef.current) {
  //       const scroll = new LocomotiveScroll({
  //         el: scrollRef.current,
  //         smooth: true,
  //         tablet: { smooth: true },
  //         smartphone: { smooth: true },
  //       });
  //     } else {
  //       console.log('scrollRef.current is null');
  //     }
  //   }
  // }, [scrollRef, window.location.pathname]);

  return (
    // <div className="App" ref={scrollRef}>
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/zelda" element={<Zelda />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
