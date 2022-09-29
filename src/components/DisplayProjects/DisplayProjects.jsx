import React, { useEffect, useState } from 'react';
import getProjectsList from '../../services/dataManager';
import Loading from '../Loading/Loading';
import displayLogo from '../../services/displayLogo';

function DisplayProjects() {
  const [projects, setProjects] = useState([
    {
      _id: null,
      name: '',
      description: '',
      image: '',
      link: '',
      technologies: [],
      gitHub: '',
    },
  ]);
  const [loader, setLoader] = useState(true);

  async function getData() {
    const data = await getProjectsList();
    setProjects(data);
    setLoader(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return loader ? (
    <Loading />
  ) : (
    <div className="displayProjects">
      <h1 className="displayProjectsTitle">Mes projets</h1>
      <div className="projectsContainer">
        {projects.map((project) => {
          return (
            // eslint-disable-next-line no-underscore-dangle
            <div className="flip" key={project._id}>
              <img className="front" src={project.image} alt="project" />
              <h2 className="name">{project.name}</h2>
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

export default DisplayProjects;