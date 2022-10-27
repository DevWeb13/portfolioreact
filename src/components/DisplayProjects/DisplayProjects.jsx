import React from 'react';
import propTypes from 'prop-types';
import displayLogo from '../../services/displayLogo';
import displayProjectLogoOrName from '../../services/displayProjectLogoOrName';

function DisplayProjects({ projects }) {
  return (
    <div className="displayProjects">
      <h1 className="displayProjectsTitle">Mes projets</h1>
      <div className="projectsContainer">
        {projects.map((project) => {
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
      _id: propTypes.string,
      name: propTypes.string,
      description: propTypes.string,
      image: propTypes.string,
      link: propTypes.string,
      technologies: propTypes.arrayOf(propTypes.string),
      gitHub: propTypes.string,
    }),
  ).isRequired,
};

export default DisplayProjects;
