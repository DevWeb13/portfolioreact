import React from 'react';
import { NavLink } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

function Header() {
  return (
    <header className="header">
      <div className="logo" />
      <nav className="navHeader">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? 'navActive' : 'nav')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? 'navActive' : 'nav')}
        >
          Mes projets
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? 'navActive' : 'nav')}
        >
          Me contacter
        </NavLink>
      </nav>
      <ToggleTheme />
      <div className="line" />
    </header>
  );
}

export default Header;
