/*

///////////////////////////////////////////////////////////////////////////////////////////////

/* 1. useEffect() is for side-effects

A functional React component uses props and/or state to calculate the output.

If the functional component makes calculations that don’t target the output value, then these calculations are named side-effects.

Examples of side-effects are fetching requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

You cannot perform side-effects directly in the body of the functional component.

How often the component renders isn’t something you can control — if React wants to render the component, you cannot stop it.
 */


function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output'


// Bad!
  document.title = 'Greetings page'; // Side-effect!
  return <div>{message}</div>;       // Calculates output
}

/*
The component rendering and side-effect invocation have to be independent.

Welcome useEffect() — the hook that runs side-effects independently of rendering.
 */


import React, { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;   // Calculates output
useEffect(() => {

    // Good!
 document.title = 'Greetings page'; // Side-effect!  }, []);
return <div>{message}</div>;         // Calculates output
}


/* useEffect() hook accepts 2 arguments:

useEffect(callback[, dependencies]);

	• callback is the callback function containing side-effect logic.

	• useEffect() executes the callback function after React has committed the changes to the screen.

	• dependencies is an optional array of dependencies. useEffect() executes callback only when the

	• dependencies have changed between renderings.


dependencies array lets you control when the side-effect runs:

	• Not provided: the side-effect runs after each rendering

	• An empty array []: the side-effect runs once after the initial rendering

	• With props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any value in the dependencies change.
 */



/////////////////////////////////////////////////FetchData example////////////////////////////////////////////////////////////////////////////////

/*
Example 1:

So let's make that happen using a special hook called `useEffect`.

`useEffect` allows you to say "do a render of this component first so the user can see _something_ then as soon as the render is done,

_then_ do something(the something here being an effect.) In our case, we want the user to see our UI first then we want to make a request to the API so we can that initial list of pets. */

import react from "react";
import { useEffect, useState } from "react";
import Pet from "./Pet";

// add to the other useStates inside component at top
const [pets, setPets] = useState([]);

// add inside component, beneath all the `useState` setup
useEffect(() => {
  requestPets();
}, []); // eslint-disable-line react-hooks/exhaustive-deps

async function requestPets() {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await res.json();

  setPets(json.pets);
}

// in jsx, under form, inside the larger div
{
  pets.map((pet) => (
    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
  ));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
2. Side-effect on component did mount

There are side-effects that you’d like to invoke once after the component mounting.

To do so, supply the callback with side-effect and indicate an empty dependencies array []:
  */

import { useEffect } from 'react';
function Greet({ name }) {
  const message = `Hello, ${name}!`;
useEffect(() => {
    document.title = 'Greetings page';
  }, []);
  return <div>{message}</div>;
}

/*
useEffect(..., []) was supplied with an empty array as dependencies argument.

This makes the useEffect() execute the callback just once, after initial mounting.

Even if the component re-renders with different name property, the side-effect runs only once after the first render:
 */
// First render
<Greet name="Eric" />   // Side-effect runs

// Second render, name prop changes
<Greet name="Stan" />   // Side-effect doesn't run

// Third render, name prop changes
<Greet name="Butters"/> // Side-effect doesn't run





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*
3. Side-effect on component did update

Each time the side-effect uses props or state values, you must indicate these values as dependencies: */

import React, { useEffect } from 'react';

function MyComponent({ prop }) {
  const [state, setState] = useState();
useEffect(() => {
    someSideEffect(
      prop, state    );
  }, [prop, state]);
  return <div>....</div>;
}

/* The useEffect(callback, [prop, state]) invokes the callback after the changes are being committed to DOM only if any value in the dependencies array [prop, state] changes.

Using the dependencies argument of useEffect() you control when to invoke the side-effect, independently from the rendering cycles of the component.

That’s the essence of useEffect() hook.

Let’s improve the Greet component by using name prop in the document title: */

import { useEffect } from 'react';
function Greet({ name }) {
  const message = `Hello, ${name}!`;
useEffect(() => {
    document.title = `Greetings to ${name}`;
  }, [name]);
  return <div>{message}</div>;
}

/* name prop is mentioned in the dependencies argument of useEffect(..., [name]).
useEffect() hook runs the side - effect after initial rendering, and on later renderings only if the name value changes. */

// First render
<Greet name="Eric" />   // Side-effect runs

// Second render, name prop changes
<Greet name="Stan" />   // Side-effect runs

// Third render, name prop doesn't change
<Greet name="Stan" />   // Side-effect doesn't run

// Fourth render, name prop changes
<Greet name="Butters"/> // Side-effect runs





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 4. Fetching data

useEffect() can perform data fetching side-effect.

The following component FetchEmployeesByQuery fetches the employees list over the network.

The query prop filters the fetched employees: */

import React, { useState } from 'react';
import { fetchEmployees } from "./fetchEmployees";
function FetchEmployeesByQuery({ query }) {
  const [employees, setEmployees] = useState([]);
useEffect(() => {
    const fetch = async () => {
      setEmployees(await fetchEmployees(query));
    };
    fetch();
  }, [query]);
return (
    <div>
      {employees.map(name => <div>{name}</div>)}
    </div>
  );
}

/* After finishing the initial render of

<FetchEmployeesByQuery query="query">, useEffect() hook starts a fetch request by calling the asynchronous function fetch().

When the request completes, setEmployees(await fetchEmployees(query)) updates the component state with
the newly fetched employees list.

When the query prop changes, useEffect() hook starts a new fetching process for a new query.

If you’d like to run just one fetch request when the component mounts, simply indicate an empty dependencies list:

useEffect(fetchSideEffect, []).
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 5. Side-effect cleanup



/* Did you ever got the following error?

Can't perform a React state update on an unmounted component.
This is a no - op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
*/

/* The message is straightforward.

We're trying to change the state of a component, even after it's been unmounted and unavailable.

There are multiple reasons why this can happen but the most common are that we didn’t unsubscribe to a websocket component, or this were dismount before an async operation finished.

How can we fix this ?

Cleanup function in the useEffect hook.

The useEffect hook is built in a way that if we return a function within the method, this function will execute when the component gets disassociated. This is very useful because we can use it to remove unnecessary behavior or prevent memory leaking issues.

So, if we want to cleanup a subscription, the code would look like this: */

useEffect(() => {
    API.subscribe()
    return function cleanup() {
        API.unsubscribe()
    }
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
There are side-effects that need cleanup.

useEffect() invokes the clean up function you return from the callback function: */

useEffect(() => {
  // Side-effect…
return function cleanup() {
 // Side-effect cleanup...  };
}, dependencies);

/*
After initial rendering, useEffect() simply invokes the callback having the side-effect.

cleanup function isn’t invoked.

On subsequent renderings, useEffect() is going to invoke the cleanup function from the previous side - effect execution
(to clean up everything after the previous side - effect), then runs the current side - effect.

Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.

For example, let’s log a message to console every 3 seconds: */

import React, { useEffect } from 'react';
function RepeatMessage({ message }) {
  useEffect(() => {
    setInterval(() => {
      console.log(message);
    }, 1000);
  }, [message]);
return <div>I'm logging to console "{message}"</div>;
}

/* Open the demo and type different messages — the console logs every 3 seconds each message ever typed.

You need to stop the logging of previous messages.

That’s the right case to clean up the side - effect.

Let’s return a clean up function that clears the previous timer: */

import React, { useEffect } from 'react';
function RepeatMessage({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 3000);
    return () => {clearInterval(id);};},[message]);
return <div>I'm logging to console "{message}"</div>;
}

/* Open the demo and type some messages: only the latest message logs to console.
 */



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Don't update the state on an unmounted component

One common implementation is to update the component state once an async function finishes.
But what happen if the component unmounts after finishing ? It will try to set the state anyway if we not control that.
In a real scenario, it happened to me on React Native that an user can leave a screen before a process ends.
In the following example, we have an async function that performs some operation and while this is running I want render a “loading” message. Once the function finish I will change the state of “loading” and render another message.

function Example(props) {
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetchAPI.then(() => {
            setloading(false)
        })
    }, [])

    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>
}

But, if we exit the component and fetchAPI ends and sets the loading state, this will prompt the error mentioned at the beginning. So we need to be sure that the component is still mounted when fetchAPI is finished.

function Example(props) {
    const [loading, setloading] = useState(true)

    useEffect(() => {
        let mounted = true
        fetchAPI.then(() => {
            if (mounted) {
                setloading(false)
            }
        })

        return function cleanup() {
            mounted = false
        }
    }, [])

    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>
}

This way we can ask if the component is still mounted. Just adding a variable that will change to false if we dismount. */