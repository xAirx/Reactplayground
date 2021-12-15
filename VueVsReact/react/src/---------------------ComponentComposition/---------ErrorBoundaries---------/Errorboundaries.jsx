/* How to prevent your React app from crashing

One of the most important lessons for React developers to know, especially if they haven't pushed a React application to the web, is what to do with uncaught errors.

In the example below, we are attempting to display a Header component in our app, but are performing an action that results in an error.

Namely, attempting to get a property from a null value:
 */

import React from "react";

export default function App() {
  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  const user = null;

  return <h1>Hello {user.name}</h1>; // error!
}

/*
If we push this code to production, we will see a blank screen exactly like this:

Why do we see nothing?

Again, we can find the answer for this within the React documentation:

    As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.



While in development, you see a big red error message with a stack trace that tells you where the error can be found.

When your application is live, however, you're just going to see a blank screen.


This is not the desired behavior that you want for your application.

But there is a way to fix it, or at least show your users something that tells them that an error took place if the application accidentally crashes.


You can wrap your component tree in what's called an error boundary.

Error boundaries are components that allow us to catch errors and show users a fallback message that tells them that something wrong occurred.


That might include instructions on how to dismiss the error(like reloading the page).

We can use an error boundary with the help of the package react - error - boundary.

We can wrap it around the component we believe is error - prone.It can also be wrapped around our entire app component tree: */

import React from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header />
    </ErrorBoundary>
  );
}

function Header() {
  const user = null;

  return <h1>Hello {user.name}</h1>;
}

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Oops, there was an error:</p>
      <p style={{ color: "red" }}>{error.message}</p>
    </div>
  );
}

/* You can also display the error message however you like and style it just like you would any normal component.

The result that we get when an error does occur is much better: */