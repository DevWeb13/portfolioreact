/**
 * It fetches the projects list from the back-end and returns it as a JSON object
 * @param   {boolean}  isDev - if the app is in development mode
 * @returns {Promise} - a promise.
 */
export default async function getProjectsList(isDev) {
  console.log(isDev);
  if (isDev) {
    try {
      const response = await fetch('http://localhost:5000/projects', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      return response.json();
    } catch (err) {
      return console.error(err);
    }
  } else {
    try {
      const response = await fetch(
        'https://back-portfolio-devweb13.vercel.app/projects',
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      return response.json();
    } catch (error) {
      return console.log(error);
    }
  }
}
