const fetch = require("node-fetch");

const handler = async function (context, req) {
  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${req.body.secret}&response=${req.body.response}`;
    const response = await fetch(url, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data);

    context.res.json(response);
  } catch (err) {
    context.res = {
      status: 500,
      body: err.message,
    };
  }
};

module.exports = { handler };

// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }

// module.exports = async function (context, req) {
//     context.res.json({
//         text: "Hello from the API"
//     });
// };
