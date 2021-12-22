/* How to refresh JWT tokens in React.js Application?

If you are using Axios (which I highly recommend), you can declare your token refreshing behaviours in the response's interceptors. This will apply to all https requests made by Axios.

The process is something like

    Checking if the error status is 401
        If there is a valid refresh token: use it to get the access token
        if there is no valid refresh token: log the user out and return
    Redo the request again with the new token.

Here is an example: */

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((resolve) => {
      const originalRequest = error.config;
      const refreshToken = localStorage.get("refresh_token");
      if (
        error.response &&
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest &&
        refreshToken
      ) {
        originalRequest._retry = true;

        const response = fetch(api.refreshToken, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.set(res.access, "token");

            return axios(originalRequest);
          });
        resolve(response);
      }

      return Promise.reject(error);
    });
  }
);
