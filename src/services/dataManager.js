export default async function getProjectsList() {
  try {
    const response = await fetch('/projects', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}
