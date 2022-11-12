export default async function getIpAdress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    return response.json();
  } catch (err) {
    return console.log(err);
  }
}
