/* Data service

We also have methods for retrieving data from server. In the case we access protected resources, the HTTP request needs Authorization header.

Let’s create a helper function called authHeader() inside auth-header.js:
 */
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}

/* The code above checks Local Storage for user item. If there is a logged in user with accessToken (JWT), return HTTP Authorization header. Otherwise, return an empty object.

Note: For Node.js Express back-end, please use x-access-token header like this:
 */
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}

/* Now we define a service for accessing data in services/user.service.js:
 */

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

/* You can see that we add a HTTP header with the help of authHeader() function when requesting authorized resource. */