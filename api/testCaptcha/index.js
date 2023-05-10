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
