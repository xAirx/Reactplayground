/* Create Data Service

In this step, we’re gonna create a service that uses axios object above to send HTTP requests.
The service exports CRUD functions and finder method:

    CREATE: create
    RETRIEVE: getAll, get
    UPDATE: update
    DELETE: remove, removeAll
    FINDER: findByTitle

services/TutorialService.js */

import http from "../http-common";

const getAll = () => {
  return http.get("/tutorials");
};

const get = (id) => {
  return http.get(`/tutorials/${id}`);
};

const create = (data) => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

/* We call axios (imported as http) get, post, put, delete method corresponding to HTTP Requests: GET, POST, PUT, DELETE to make CRUD Operations.

You can simplify import statement with: */
