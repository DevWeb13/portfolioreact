export default async function getProjectsList(isDev) {
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
