/* 5. Side-effect cleanup

Some side-effects need cleanup: close a socket, clear timers.

If the callback of useEffect(callback, deps) returns a function,
 then useEffect() considers this as an effect cleanup:
 */

useEffect(() => {
  // Side-effect...
  return function cleanup() {
    // Side-effect cleanup...
  };
}, dependencies);

/*
Cleanup works the following way:

A) After initial rendering, useEffect() invokes the callback having the side-effect.
cleanup function is not invoked.

B) On later renderings, before invoking the next side-effect callback, useEffect()
 invokes the cleanup function from the previous side-effect execution
 (to clean up everything after the previous side-effect), then runs the current side-effect.

C) Finally, after unmounting the component, useEffect()
invokes the cleanup function from the latest side-effect.

React useEffect() Hook: when callback and cleanup are invoked

Let's see an example when the side-effect cleanup is useful.

The following component <RepeatMessage message="My Message" /> accepts a prop message.
Then, every 2 seconds the message prop is logged to console:
 */

import { useEffect } from "react";
function RepeatMessage({ message }) {
  useEffect(() => {
    setInterval(() => {
      console.log(message);
    }, 2000);
  }, [message]);
  return <div>I'm logging to console "{message}"</div>;
}

/*
Open the demo and type some messages.
The console logs every 2 seconds any message that's been ever typed into the input.
However, you need to log only the latest message.

    That's the case to clean up the side-effect: cancel the previous
timer when starting a new one.Let's return a cleanup function that stops the previous timer: */

import { useEffect } from "react";
function RepeatMessage({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [message]);
  return <div>I'm logging to console "{message}"</div>;
}

/* Open the demo and type some messages: only the latest message logs to console.
 */
