async function getProjectsList() {
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

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY || '',
    'X-RapidAPI-Host': 'the-legend-of-zelda.p.rapidapi.com',
  },
};
async function getZeldaGamesList() {
  try {
    const response = await fetch(
      'https://the-legend-of-zelda.p.rapidapi.com/games',
      options,
    );
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}

export { getProjectsList, getZeldaGamesList };
