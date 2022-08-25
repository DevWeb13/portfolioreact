export default async function getProjectsList(projects) {
  try {
    const response = await fetch('/projects', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
    return projects;
  }
}
