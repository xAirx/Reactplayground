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


/* Destructuring assignment is a feature of JavaScript introduced by ES6(or ES 2015) that’s available for
both object and array data types.It allows you to assign the values of an array or the properties of an object without needing to reference the variable directly in the assignment.
Here’s the traditional way of assigning a value to a variable in JavaScript: */



// Example without destructuring
const sampleObject = {
  name: "John",
  age: 30,
};

const name = sampleObject.name
const name = sampleObject.age


//example with destructuring
const sampleObject2 = {
  name: "John",
  age: 30,
}


const { name, age } = sampleObject2;

/////////////////////////////////////////////
/////////////////////////////////////////////

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet;


const Pet = ({name,animal,breed}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};
export default Pet;
/////////////////////////////////////////////
/////////////////////////////////////////////




/////////////////////////////////////////////
/////////////////////////////////////////////

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


/////////////////////////////////////////////
/////////////////////////////////////////////
