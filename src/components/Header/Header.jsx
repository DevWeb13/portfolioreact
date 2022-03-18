import React from 'react';
import { NavLink } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
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
      <ToggleTheme />
    </header>
  );
};

export default Header;
