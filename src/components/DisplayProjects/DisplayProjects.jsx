/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import getEmployeesList from '../../services/dataManager';

function DisplayProjects() {
  const [projects, setProjects] = useState([{}]);
  const [loader, setLoader] = useState(true);

  async function getData() {
    const data = await getEmployeesList(projects);
    setProjects(data);
    setLoader(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return loader ? (
    <div>Loading...</div>
  ) : (
    <div className="displayProjects">
      {projects.map((project) => {
        console.log(project._id);
        return (
          <div className="projectContainer" key={project._id}>
            <p>{project._id}</p>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} height={100} />
            <p>{project.link}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayProjects;
