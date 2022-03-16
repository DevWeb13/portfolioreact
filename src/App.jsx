import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projets from './pages/Projets/Projets';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/projets" element={<Projets />}></Route>
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
