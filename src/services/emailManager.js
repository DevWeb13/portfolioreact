/**
 * It sends a POST request to the server with the email object as the body
 * @param email - {
 * @returns The response from the server.
 */

/**
 * It sends a POST request to the server with the email object as the body
 *
 * @param   {Object}  email  - { email: 'email', name: 'name', message: 'message' }
 * @param   {Boolean} isDev  - if the app is in development mode
 * @returns {Promise} - a promise.
 */
export default async function postEmail(email, isDev) {
  console.log(email);
  if (isDev) {
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
      return err;
    }
  } else {
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
