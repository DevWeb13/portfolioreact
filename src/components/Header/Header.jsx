import React from 'react';
import { NavLink } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

function Header() {
  return (
    <header className="header">
      <div className="logo" />
      <nav className="navHeader">
        <NavLink to="/" className={(nav) => (nav.isActive ? 'navActive' : '')}>
          Accueil
        </NavLink>

        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? 'navActive' : '')}
        >
          Mes projets
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? 'navActive' : '')}
        >
          Me contacter
        </NavLink>
      </nav>
      <ToggleTheme />
    </header>
  );
}

export default Header;
