import React, { useEffect, useState, Suspense, lazy } from 'react';
import getProjectsList from '../../services/dataManager';
import ToggleButtonMUI from '../../components/ToggleButtonMUI/ToggleButtonMUI';
import sortProjects from '../../services/sortProjects';

const ProjectCard = lazy(() =>
  import('../../components/ProjectCard/ProjectCard'),
);
const Loading = lazy(() => import('../../components/Loading/Loading'));

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

  async function getData() {
    const data = await getProjectsList();
    setProjects(data);
    setLoader(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Projects">
      <h1>Mes projets</h1>
      <ToggleButtonMUI alignment={alignment} setAlignment={setAlignment} />
      {loader ? (
        <Loading />
      ) : (
        <div className="projectsContainer">
          {sortProjects(projects, alignment).map((project) => {
            return (
              // eslint-disable-next-line no-underscore-dangle
              <Suspense key={project._id} fallback={<Loading />}>
                <ProjectCard project={project} />
              </Suspense>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Projets;
