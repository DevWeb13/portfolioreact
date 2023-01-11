/**
 * It sorts the projects by date and then filters them by category
 * @param {Array} array - the array of projects to sort
 * @param {String} type - the type of project we want to display
 * @returns {Array} a sorted array of projects.
 */
export default function sortProjects(array, type) {
  const sortedProjects = [...array].sort((a, b) => {
    return b.date - a.date;
  });
  if (type === 'Tous') {
    return sortedProjects;
  }
  return sortedProjects.filter((project) => project.categorie === type);
}
