import React, { useEffect, useState } from 'react';
import getProjectsList from '../../services/dataManager';
import Loading from '../../components/Loading/Loading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ToggleButtonMUI from '../../components/ToggleButtonMUI/ToggleButtonMUI';
import sortProjects from '../../services/sortProjects';

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
            // eslint-disable-next-line no-underscore-dangle
            return <ProjectCard key={project._id} project={project} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Projets;
