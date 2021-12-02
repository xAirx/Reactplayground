// destructuring is a simple property is used to make code much clear and readable mainly when we pass props in react.

// What is destructuring ?

/*  It makes developer’s life easy, by assigning their own variables.
    Nested data is more complex, it takes time to access, but by the use of destructuring,
    we can access faster of nested data.
    It improves the sustainability, readability of code.
    It helps to cut the amount of code used in an application.
    It trims the number of steps taken to access data properties.
    It provides components with the exact data properties.
    It saves time from iterate over an array of objects multiple times.
    In ReactJS We use multiple times ternary operators inside the render function,
    without destructuring it looks complex and hard to access them,
    but by the use of destructuring, we can improve the readability of ternary operators.
 */

// Example without destructuring

import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Your age is {props.age}</h2>
    </div>
  );
};

export default Greet;

// Example with destructuring

import React from "react";

const Greet = ({ name, age }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Your age is {age}</h2>
    </div>
  );
};

// Example with destructuring and mapping data

import React from "react";

const MapData = ({ data }) => {
  const { id, name, email } = data;
  return (
    <div>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
};

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
