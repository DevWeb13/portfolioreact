export default async function postEmail(email) {
  console.log(email);
  try {
    const response = await fetch('http://localhost:5000/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    });
    return response.json();
  } catch (err) {
    try {
      const response = await fetch(
        'https://back-portfolio-devweb13.vercel.app/emails',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(email),
        },
      );
      console.log(response);
      return response.json();
    } catch (error) {
      return error;
    }
  }
}
