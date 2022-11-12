import React, { useEffect, useState } from 'react';
import getProjectsList from '../../services/dataManager';
import Loading from '../../components/Loading/Loading';
import DisplayProjects from '../../components/DisplayProjects/DisplayProjects';

function Projets() {
  const [projects, setProjects] = useState([
    {
      _id: null,
      logo: '',
      name: '',
      description: '',
      image: '',
      link: '',
      technologies: [],
      gitHub: '',
      catégorie: '',
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

  return loader ? <Loading /> : <DisplayProjects projects={projects} />;
}

export default Projets;
