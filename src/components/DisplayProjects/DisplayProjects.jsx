import React from 'react';
import propTypes from 'prop-types';
import ToggleButtonMUI from '../ToggleButtonMUI/ToggleButtonMUI';
import displayLogo from '../../services/displayLogo';
import displayProjectLogoOrName from '../../services/displayProjectLogoOrName';
import sortProjects from '../../services/sortProjects';

function DisplayProjects({ projects }) {
  const [alignment, setAlignment] = React.useState('Tous');

  return (
    <div className="displayProjects">
      <h1 className="displayProjectsTitle">Mes projets</h1>
      <ToggleButtonMUI alignment={alignment} setAlignment={setAlignment} />
      <div className="projectsContainer">
        {sortProjects(projects, alignment).map((project) => {
          return (
            // eslint-disable-next-line no-underscore-dangle
            <div className="flip" key={project._id}>
              <div className="front">
                <img
                  className="imageProject"
                  src={project.image}
                  alt="imageProject"
                />
              </div>
              {displayProjectLogoOrName(project)}
              <div className="back">
                <h3 className="description">{project.description}</h3>
                <div className="technologyContainer">
                  {project.technologies.map((technology) => {
                    return (
                      displayLogo(technology) !== '' && (
                        <img
                          src={displayLogo(technology)}
                          alt={technology}
                          key={technology}
                        />
                      )
                    );
                  })}
                </div>

                <div className="projectLinksContainer">
                  <button type="button">
                    <a
                      className="projectLink"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site
                    </a>
                  </button>
                  <button type="button">
                    <a
                      className="projectLink"
                      href={project.gitHub}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Dépot GitHub
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

DisplayProjects.propTypes = {
  projects: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
      link: propTypes.string.isRequired,
      gitHub: propTypes.string.isRequired,
      technologies: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
      date: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default DisplayProjects;
