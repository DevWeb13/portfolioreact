/* eslint-disable no-underscore-dangle */
import React, { useEffect, lazy } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import getProjectsList from '../../services/dataManager';
import sortProjects from '../../services/sortProjects';
import addIntersectionObserver from '../../services/addIntersectionObserver';
import Loading from '../../components/Loading/Loading';

const ToggleButtonMUI = lazy(() =>
  import('../../components/ToggleButtonMUI/ToggleButtonMUI'),
);
const ProjectCard = lazy(() =>
  import('../../components/ProjectCard/ProjectCard'),
);

function Projets() {
  const [alignment, setAlignment] = React.useState('Tous');

  // const queryClient = useQueryClient();
  // /**
  //  * @type {boolean}
  //  */
  // const isDev = queryClient.getQueryData('isDev') || false;

  const isDev = process.env.NODE_ENV === 'development';
  const queryKey = ['projects'];
  const { isLoading, data } = useQuery(queryKey, () => getProjectsList(isDev), {
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });

  const projects = data || [];

  useEffect(() => {
    const cards = document.querySelectorAll('.flip');
    cards.forEach((card) => {
      if (card.classList.contains('visible')) {
        card.classList.remove('visible');
      }
    });

    let delay = 0;
    const interval = 500; // 1 seconde
    const observer = addIntersectionObserver('visible', { threshold: 0.5 });

    cards.forEach((project) => {
      setTimeout(() => {
        observer.observe(project);
      }, delay);
      delay += interval;
    });
  }, [projects, alignment]);

  return (
    <div className="projects">
      <h1>Mes projets</h1>
      <ToggleButtonMUI alignment={alignment} setAlignment={setAlignment} />
      {isLoading ? (
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
