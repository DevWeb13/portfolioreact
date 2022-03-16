import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
     
      <img src="./assets/logo.png" className="logo" alt="logo" />
     
      
      <nav className="navHeader">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? 'navActive' : null)}
        >
          Accueil
        </NavLink>
        
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? 'navActive' : null)}
        >
          Mes projets
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? 'navActive' : null)}
        >
          Me contacter
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
