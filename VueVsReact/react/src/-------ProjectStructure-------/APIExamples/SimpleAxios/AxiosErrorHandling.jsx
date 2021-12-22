/* Axios Error handling with async-await

If you want to use async-await, just wrap the axios call with try/catch block.
 */

async function getTutorial() {
  try {
    const response = await axios.get("/bezkoder.com/tutorials");
    console.log(response);
  } catch (error) {
    if (error.response) {
      // get response with a status code not in range 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // no response
      console.log(error.request);
    } else {
      // Something wrong in setting up the request
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
}
