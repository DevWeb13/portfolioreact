import React from 'react';
import propTypes from 'prop-types';
import displayLogo from '../../services/displayLogo';
import displayProjectLogoOrName from '../../services/displayProjectLogoOrName';

function ProjectCard({ project }) {
  return (
    <div className="flip">
      <div className="front">
        <img className="imageProject" src={project.image} alt="imageProject" />
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
}

export default ProjectCard;

ProjectCard.propTypes = {
  project: propTypes.shape({
    _id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
    gitHub: propTypes.string.isRequired,
    technologies: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    date: propTypes.string.isRequired,
  }).isRequired,
};
