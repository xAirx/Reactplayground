// Using the DP array to only run if a prop changes

import { useEffect } from "react";

const Greet = (name) => {
  useEffect(() => {
    console.log(`${name} has been rendered`);
  }, [name]);

  return <h1>Hello {name}</h1>;
};

// Useeffect Dependency array example

const FetchApiData = ({ data }) => {
  useEffect(() => {
    FetchData(data);
    // if this data prop changes then run this function else dont.
  }, [data]);

  const FetchData = (data) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${data}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return <h1>{data}</h1>;
};

// This will only run if the data changes

/* 2. Dependencies argument

dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. When dependencies are:

A) Not provided: the side-effect runs after every rendering. */

import { useEffect } from "react";
function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });
}

/* B) An empty array []: the side-effect runs once after the initial rendering. */

import { useEffect } from "react";
function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}

/*
C) Has props or state values [prop1, prop2, ..., state1, state2]:
the side-effect runs only when any depenendecy value changes.
 */

import { useEffect, useState } from "react";
function MyComponent({ prop }) {
  const [state, setState] = useState("");
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);
}

/* Let's detail into the cases B) and C) since they're used often. */

/*

Hooks Example:

With hooks, we can simply pass a second argument into useEffect() as an array with count in it and add the conditional inside our useEffect().

Whatever is being passed into the array can be used to define all variables on which the hook depends. If one of the variables updates, the hook runs again.

Keep in mind, if you pass an empty array, the hook doesn’t run when updating the component at all because there is nothing to watch for.

This is useful when you are fetching data in a loop, and you only want to fetch it on componentDidMount(), therefore stopping the loop. */

import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, incrementCounter] = useState(0);

  // using useEffect as a watcher function
  useEffect(() => {
    if (counter <= 10) {
      document.title = counter;
    }
    // avoiding stale closure using dependencies array
  }, [counter]);

  // avoiding stale closure using prev state.
  function handleIncrement() {
    incrementCounter((counter) => counter + 1);
  }

  return (
    <div>
      <div>{counter}</div>
      <hr />
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

/*
We would pass [counter] into the second argument of useEffect(). */
