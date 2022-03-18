import React from 'react';

const ToggleTheme = () => {
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
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ToggleTheme;
