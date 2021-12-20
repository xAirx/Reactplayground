const axios = require("axios");

const apiInstance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: {
    "user-agent": "VueVsReact",
  },
});

async function linkContactandItem(email, { listId }) {
  //get contact
  // 2.1 if contact exists then update
  // 2.2 if contact does not exist then create
  const contact = await apiInstance
    .get(`/contacts/${email}`)
    .then((response) => response.data)
    .catch((error) => {
      // guard clause
      if (error.response.status === 404) return null;
      console.log(error);
      throw e;
    });

  if (contact === null) {
    return apiInstance.post("/contacts", {
      email,
      listIds: [listId],
    });
  } else {
    return apiInstance.put(`/contacts/${contact.id}`, {
      listIds: [...contact.listIds, listId],
    });
  }
}

// Converting this to smaller functions with better naming

async function linkContactandItem(email, { listId }) {
  //get contact
  const contact = await getContact(email);

  if (contact === null) {
    return createContact(email, listId);
  } /* else { */
  return updateContact(contact.id, listId);
  /* } */
}

// helper functions

function createContact(email, listId) {
  return apiInstance.post("/contacts", {
    email,
    listIds: [listId],
  });
}

function updateContact(id, listId) {
  return apiInstance.put(`/contacts/${id}`, {
    listIds: [...contact.listIds, listId],
  });
}

function getContact(email) {
  return apiInstance
    .get(`/contacts/${email}`)
    .then((response) => response.data)
    .catch((error) => {
      // guard clause
      if (error.response.status === 404) return null;
      console.log(error);
      throw e;
    });
}

module.exports = {
  linkContactandItem,
};
