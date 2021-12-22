/* How to prevent your React app from crashing

One of the most important lessons for React developers to know, especially if they haven't pushed a React application to the web, is what to do with uncaught errors.

In the example below, we are attempting to display a Header component in our app, but are performing an action that results in an error.

Namely, attempting to get a property from a null value:
 */


/* You can also display the error message however you like and style it just like you would any normal component.

The result that we get when an error does occur is much better: */


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






/////////// Class Version ///////////////


/* Frequently there's errors with APIs with malformatted or otherwise weird data. Let's be defensive about this because we still want
to use this API but we can't control when we get errors.

We're going to use a feature called `componentDidCatch` to handle this.
This is something you can't do with hooks so if you needed this sort of functionality you'd have to use a class component.

This will also catch 404s on our API if someone give it an invalid ID!

A component can only catch errors in its children, so that's important to keep in mind. It cannot catch its own errors.

Let's go make a wrapper to use on Details.js. Make a new file called ErrorBoundary.js
 */


// mostly code from reactjs.org/docs/error-boundaries.html
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


/* - Now anything that is a child of this component will have errors caught here. Think of this like a catch block from try/catch.
- A static method is one that can be called on the constructor. You'd call this method like this: `ErrorBoundary.getDerivedStateFromError(error)`.
This method must be static.

- If you want to call an error logging service, `componentDidCatch` would be an amazing place to do that.
I can recommend [Azure Monitor][azure], [Sentry][sentry], and [TrackJS][trackjs].
Let's go make Details use it. Go to Details.js */

// add import
import ErrorBoundary from "./ErrorBoundary";

// replace export
const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}

/* - Now this is totally self contained. No one rendering Details has to know that it has its own error boundary. I'll let you decide if you like this pattern or if you would have preferred doing this in App.js at the Router level. Differing opinions exist.
- We totally could have made ErrorBoundary a bit more flexible and made it able to accept a component to display in cases of errors. In general I recommend the "WET" code rule (as opposed to [DRY][dry], lol): Write Everything Twice (or I even prefer Write Everything Thrice). In this case, we have one use case for this component, so I won't spend the extra time to make it flexible.
If I used it again, I'd make it work for both of those use cases, but not _every_ use case. On the third or fourth time, I'd then go back and invest the time to make it flexible.
Let's make it redirect automatically after five seconds. We could do a set timeout in the `componentDidCatch` but let's do it with `componentDidUpdate` to show you how that works.
 */


// top
import { Link, Redirect } from "react-router-dom";

// add redirect
state = { hasError: false, redirect: false };

// under componentDidCatch
componentDidUpdate() {
  if (this.state.hasError) {
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }
}

// first thing inside render
if (this.state.redirect) {
  return <Redirect to="/" />;
} } else if (this.state.hasError) {
  …
}


/* - `componentDidUpdate` is how you react to state and prop changes with class components. In this case we're reacting to the state changing. You're also passed the previous state and props in the paremeters (which we didn't need) in case you want to detect what changed.
- Rendering Redirect components is how you do redirects with React Router. You can also do it progamatically but I find this approach elegant.
 */