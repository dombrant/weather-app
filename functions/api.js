const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const { latitude, longitude } = JSON.parse(event.body);

    try {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.API_KEY}`
      );
      const data = await request.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Error fetching data: ${error}`,
      };
    }
  } else {
    return {
      statusCode: 405,
      body: "ERROR: Method not allowed, expected a POST request.",
    };
  }
};
