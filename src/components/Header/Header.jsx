import React from 'react';
import { NavLink } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import displayBackToTopButton from '../../services/displayBackToTopButton';

function Header() {
  window.addEventListener('scroll', displayBackToTopButton);

  return (
    <header className="header" id="header">
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
      <button
        type="button"
        id="backToTop"
        className="btHidden"
        aria-label="Back to top"
        onClick={() => {
          // scroll smoothly to the top of the page
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      />
    </header>
  );
}

export default Header;
