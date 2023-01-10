/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import getProjectsList from '../../services/dataManager';
import ToggleButtonMUI from '../../components/ToggleButtonMUI/ToggleButtonMUI';
import sortProjects from '../../services/sortProjects';
import Loading from '../../components/Loading/Loading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function Projets() {
  const [alignment, setAlignment] = React.useState('Tous');

  const queryClient = useQueryClient();
  const isDev = queryClient.getQueryData('isDev');

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

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          } else {
            const element = entry.target;
            const content = element.innerHTML;
            const cacheKey = `cache-${element.id}`;
            caches.open('my-cache').then((cache) => {
              cache.put(cacheKey, new Response(content));
            });
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
