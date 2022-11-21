/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import getProjectsList from '../../services/dataManager';
import ToggleButtonMUI from '../../components/ToggleButtonMUI/ToggleButtonMUI';
import sortProjects from '../../services/sortProjects';
import Loading from '../../components/Loading/Loading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function Projets() {
  const [projects, setProjects] = useState([
    {
      _id: '',
      logo: '',
      name: '',
      description: '',
      image: '',
      link: '',
      technologies: [],
      gitHub: '',
      catégorie: '',
      date: '',
    },
  ]);
  const [loader, setLoader] = useState(true);
  const [alignment, setAlignment] = React.useState('Tous');

  // savoir si on est en prod ou en dev
  const isDev = process.env.NODE_ENV === 'development';

  async function getData() {
    const data = await getProjectsList(isDev);
    setProjects(data);
    setLoader(false);
    // save data to localstorage if not already there
    if (!localStorage.getItem('projects')) {
      localStorage.setItem('projects', JSON.stringify(data));
    }
  }

  useEffect(() => {
    // si les données sont déjà dans le local storage, on les récupère
    const isProjectsInLocalStorage = localStorage.getItem('projects');
    if (isProjectsInLocalStorage && isProjectsInLocalStorage !== undefined) {
      const data = JSON.parse(isProjectsInLocalStorage);
      setProjects(data);
      setLoader(false);
    } else {
      getData();
    }
  }, []);

  useEffect(() => {
    console.log('test');
    const cards = document.querySelectorAll('.flip');
    cards.forEach((card) => {
      if (card.classList.contains('visible')) {
        card.classList.remove('visible');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }
      },
      { threshold: 0.5 },
    );
    cards.forEach((project) => {
      observer.observe(project);
    });
  }, [projects, alignment]);

  return (
    <div className="projects">
      <h1>Mes projets</h1>
      <ToggleButtonMUI alignment={alignment} setAlignment={setAlignment} />
      {loader ? (
        <Loading />
      ) : (
        <div className="projectsContainer">
          {sortProjects(projects, alignment).map((project) => {
            return <ProjectCard project={project} key={project._id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Projets;
