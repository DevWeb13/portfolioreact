import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import displayBackToTopButton from '../../services/displayBackToTopButton';

function Header() {
  const [homeNavClass, setHomeNavClass] = useState('nav');
  const [projectsNavClass, setProjectsNavClass] = useState('nav');
  const [contactNavClass, setContactNavClass] = useState('nav');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setHomeNavClass('navActive');
    } else {
      setHomeNavClass('nav');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/projets') {
      setProjectsNavClass('navActive');
    } else {
      setProjectsNavClass('nav');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/contact') {
      setContactNavClass('navActive');
    } else {
      setContactNavClass('nav');
    }
  }, [location.pathname]);
  window.addEventListener('scroll', displayBackToTopButton);

  return (
    <header className="header" id="header">
      <div className="logo" />
      <nav className="navHeader">
        <NavLink to="/" className={homeNavClass}>
          Accueil
        </NavLink>
        <NavLink to="/projets" className={projectsNavClass}>
          Mes projets
        </NavLink>
        <NavLink to="/contact" className={contactNavClass}>
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
