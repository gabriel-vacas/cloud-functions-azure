function App() {

  // const reCaptchaValidation = async () => {
  //   grecaptcha.ready(() => {
  //     if (process.env.GATSBY_RECAPTCHA_SITE_KEY) {
  //       try {
  //         grecaptcha
  //           .execute(process.env.GATSBY_RECAPTCHA_SITE_KEY, {
  //             action: 'submit',
  //           })
  //           .then((token: string) => {
  //             validateReCaptchaToken(token);
  //           });
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   });
  // };

  // const validateReCaptchaToken = async (token) => {
  //   const reCaptchaData = {
  //     secret: process.env.GATSBY_RECAPTCHA_SECRET_KEY,
  //     response: token,
  //   };
  //   const response = await window
  //     // this works only when the code is running on the server, to test locally we need to run the function API locally and point to that url
  //     .fetch("/api/validateReCaptcha", {
  //       method: `POST`,
  //       body: JSON.stringify(reCaptchaData),
  //     })
  //     .then((res) => res.json());

  //   console.log("RES", response);
  // };

  const testAzureFunction = async () => {
    const response = await window
      .fetch("/api/test", {
      // .fetch("http://localhost:7071/api/test", {
        method: `POST`,
      })
      .then((res) => res.json());
    console.log("RES", response);
  };

  return <button onClick={() => testAzureFunction()}>Test</button>;
}

export default App;
