const fetch = require("node-fetch");

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const coordinates = JSON.parse(event.body);

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
