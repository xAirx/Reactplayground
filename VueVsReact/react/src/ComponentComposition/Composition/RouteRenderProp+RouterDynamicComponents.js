////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Dynamic Component Compositions in React
Often you see something like the following App component whereas React Router is used to compose dynamic components,
    depending on the selected route(URL), into the Route components: */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={SignUpPage} />
      <Route path="/login" component={SignInPage} />

      <Footer />
    </div>
  </Router>
);

/* Whereas the Footer component and the Navigation component, which enables navigation from route to route(URL to URL, path to path),
  stay always the same, the rendered component for the Route components will adjust depending on which URL is currently visited by the user.
  Basically the App component displays a static frame of components that will be always visible(e.g.Navigation, Footer) whereas
  the inner content changes depending on the URL.

  React Router and its Route components take care of it.Keeping it simple, each
  Route component uses the component prop, to render its content, but only shows it when the matching route is selected. */

/* Route props

As it turns out, the Route component defines its own props.
These props are called history, match and location.

They are used as help in navigating our application and they can be passed down to components as well.
We will look at these props in more detail in future articles, but for now let's see how we can pass
these down to our Books component because it may need them in the future.
We can use the spread operator to pass down those props in a simple way like so: */

<Route
  path="/store"
  render={(props) => <Books {...props} books={this.state.books} />}
/>;

/* Did you notice the syntax {...props} inside the Books component?
  That's how we pass all the props set by Route down to the Books component.
This syntax uses the spread operator as a shortcut to listing all the Route props manually.

And there you have it, how to pass props down to rendered components via Route. */
