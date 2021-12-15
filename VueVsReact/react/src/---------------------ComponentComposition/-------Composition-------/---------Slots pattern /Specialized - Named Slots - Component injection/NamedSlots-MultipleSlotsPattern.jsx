/* What if you want to pass more than one component and place them at different positions ?
you don't need to use the children prop and instead you just use regular props:
In this example we are passing functional components into another component */

//// PASSING DOWN TO PROFILE COMPONENT ////
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  //This is a user object that we are passing down to user component
  const user = {
    name: "Robin Wieruch",
    biography: "Software Engineer ...",
    avatarUrl: logo,
  };
  return <User user={user} />;
};

/* This is the user component which recieves the user prop which passes it to the profile component
 */
const User = ({ user }) => (
  <Profile
    user={user}
    avatar={<AvatarRound user={user} />}
    biography={<BiographyFat user={user} />}
  />
);

//The profile component recieves the user prop and renders the avatar and biography

const Profile = ({ user, avatar, biography }) => (
  <div className="profile">
    <div>{avatar}</div>
    <div>
      <p>{user.name}</p>
      {biography}
    </div>
  </div>
);

/*
Often this approach is used when having a surrounding layout component which takes multiple components as content with props.

Now you can exchange the Avatar or Biography components dynamically with other components such as:
 */

const AvatarSquare = ({ user }) => (
  <img className="square" alt="avatar" src={user.avatarUrl} />
);

const BiographyItalic = ({ user }) => (
  <p className="italic">{user.biography}</p>
);

/* Many people refer to this as slot pattern in React. */
/*  */
/* And again, that's how composition in React shines. */
/*  */
/* You don't need to touch the Profile component. */
/*  */
/* Moreover, you don't need to pass props, in this case the user, multiple levels down the component tree, but rather pass it to the slotted components. */
