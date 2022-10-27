import React from 'react';
import sportseeLogo from '../assets/sportseelogo.svg';

/**
 * If the project has a logo, display it, otherwise display the project name
 * @param {Object} project - the project object
 * @returns {Object}  A function that takes in a project object and returns either the project name or the
 * project logo.
 */
export default function displayProjectLogoOrName(project) {
  if (project.logo === '') {
    return <h2 className="name">{project.name}</h2>;
  }
  if (project.logo === 'sportseelogo') {
    return <img className="logo" src={sportseeLogo} alt="logo" />;
  }
  return <img className="logo" src={project.logo} alt="logo" />;
}
