import React from 'react';

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
        <i className="fas fa-moon" />
        <i className="fas fa-sun" />
        <div className="ball" />
      </label>
    </div>
  );
}

export default ToggleTheme;
