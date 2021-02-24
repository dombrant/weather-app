const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello world!" }),
  };
};
