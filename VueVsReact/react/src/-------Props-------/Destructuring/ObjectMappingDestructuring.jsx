/////////////////////////////////////////////
/////////////////////////////////////////////

//example without destructuring
import React from "react";

const ShowData = ({ data }) => {
  const { id, name, email } = data;
  return (
    <div>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
};

// Example with destructuring

import React from "react";

const ShowData = ({ id, name, email }) => {
  return (
    <div>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
};

/////////////////////////////////////////////
/////////////////////////////////////////////

// Destructuring and mapping

import React from "react";

const MapData = ({ data }) => {
  return data.map((user) => {
    const { id, name, email } = user;
    return (
      <div key={id}>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    );
  });
};

/////////////////////////////////////////////
/////////////////////////////////////////////
