/* Handle JWT Token expiration in React with Hooks
Last modified: October 12, 2021 bezkoder React

Using React Components instead:
React – How to Logout when Token is expired (JWT)

Contents [hide]

    How to check when JWT Token is expired
    Handle JWT Token expiration with Route changes
    Handle JWT Token expiration with response status
    Conclusion
    Further Reading
    Source Code

How to check when JWT Token is expired

There are two ways to check if Token is expired or not.

    1. get expiry time in JWT and compare with current time
    2. read response status from the server

I will show you the implementations of both ways.
– For 1, we check the token expiration every time the Route changes and call App component logout method.
– For 2, we dispatch logout event to App component when response status tells us the token is expired.


The Github source code is at the end of the tutorials.
Handle JWT Token expiration with Route changes

We need to do 2 steps:
– Create a component with react-router subscribed to check JWT Token expiry.
– Render it in the App component.

In src folder, create common/AuthVerify.js file with following code: */


import React from "react";
import { withRouter } from "react-router-dom";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <div></div>;
};

export default withRouter(AuthVerify);



/* Because we use BrowserRouter, we import withRouter and wrap the component with a HoC. Now props can access the history object’s properties and functions.

Then we pass a callback to props.history.listen() for listening every Route changes.

To call a parent App component logOut() method from AuthVerify component, we need to pass the logOut() method as a prop:

<AuthVerify logOut={logOut}/>

Let’s put the AuthVerify component into App component like this. */



import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import { logout } from "./actions/auth";

import { history } from "./helpers/history";

import AuthVerify from "./common/AuthVerify";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  ..

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          ...
        </nav>

        <div className="container">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>

        <AuthVerify logOut={logOut}/>
      </div>
    </Router>
  );
};

export default App;





/* Handle JWT Token expiration with response status

First we need to set up a global event-driven system, or a PubSub system, which allows us to listen and dispatch events from independent components.

An Event Bus implements the PubSub pattern, events will be fired from other components so that they don’t have direct dependencies between each other.

We’re gonna create Event Bus with three methods: on, dispatch, and remove.

common/EventBus.js */

---

const eventBus = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;




/* – on() method attachs an EventListener to the document object. The cal lback will be called when the event gets fired. */
/* – dispatch() method fires an event using the CustomEvent API. */
/* – remove() method removes the attached event from the document object. */
/*  */
/* Next we import EventBus in App component and listen to "logout" event. */
/* src/App.js */

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import { logout } from "./actions/auth";

import { history } from "./helpers/history";

import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  ...

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          ...
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;


/*
Finally we only need to dispatch "logout" event in the components when getting Unauthorized response status.

components/board-user.component.js */

import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => { ... },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return ( ... );
};

export default BoardUser;
