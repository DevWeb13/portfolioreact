import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ToggleTheme() {
  function toggleTheme() {
    document.body.classList.toggle('dark');
  }
  return (
    <div className="toggleTheme">
      <input
        type="checkbox"
        className="checkbox"
        name="darkMode"
        id="darkMode"
        onChange={toggleTheme}
      />
      <label htmlFor="darkMode" className="label">
        <FontAwesomeIcon className="fas fa-moon" icon={faMoon} />
        <FontAwesomeIcon className="fas fa-sun" icon={faSun} />
        <div className="ball" />
      </label>
    </div>
  );
}

export default ToggleTheme;
