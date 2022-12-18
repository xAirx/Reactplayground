/* Entering React Component Composition?

    There is one property(React prop) that helps us out with this dilemma for our
    React component: the React children prop.

    It's one special prop provided by React to render something within a component whereas the
    component isn't aware ahead of time what it will be.  A basic example may be the following: */

const Button = ({ onClick, type = 'button', children }) => (
  <button type={type} onClick={onClick}>
    {/* The onclick prop is a  function passsed in as a prop.*/}
    {/* // this could be anything (in this case text) */}
    {children}
  </button>
);

/*
The button element becomes a reusable Button component whereas the Button component doesn't
know what it renders except for the button.
