const fetch = require("node-fetch");

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const coordinates = JSON.parse(event.body);
    const latitude = coordinates.latitude;
    const longitude = coordinates.longitude;

    // const request = await fetch(
    //   `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt={5}&appid=${API_key}`
    // );

    return {
      statusCode: 200,
      body: JSON.stringify(event.body),
    };
  } else {
    return {
      statusCode: 405,
      body: "ERROR: Method not allowed, expected a POST request.",
    };
  }
};
