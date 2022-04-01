 Make Your CSS Dynamic 🕺 With Styled Components

/* styled - components helps you write better CSS in React.
 It does so by allowing you to wrap all your component's styles into a neat, style-only component.

 https://dev.to/vtrpldn/styled-components-dealing-with-dynamic-styling-1ja3

So, instead of this: */

.wrapper{
  font-family: sans-serif;
}

.button {
  background: #2b2b2b;
  color: white;
  font-size: 24px;
  padding: 12px;
  cursor: pointer;
}

/* and this */

import React from "react";
import './styles.css';

export default function App() {
  return (
    <div class="Wrapper">
      <button class="Button">Hello, I am a Button</button>
    </div>
  );
}

/* You have something like that:
 */
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: sans-serif;
`;

const Button = styled.button`
  background: #2b2b2b;
  color: white;
  font-size: 24px;
  padding: 12px;
  cursor: pointer;
`;

export default function App() {
  return (
    <Wrapper>
      <Button>Hello, I am a Button</Button>
    </Wrapper>
  );
}

/* Which might not look like a big change.
I know, I know! It looks like all that we did here was merge two files into a single one...

However, by doing so we integrated our styles into styled - components
and now that the library controls our CSS it can do all kinds of cool stuff like:

    Automatic inject critical CSS
    Automatic vendor prefixing
    Theming and dynamic styling

This saves us a lot of time and allows us to focus on important stuff like adding borders to buttons and stuff like that.

Now, after this brief introduction to the wonders of styled-components, let's focus on the dynamic styling part.
Dynamic styling with styled-components

The point of dynamic styling is saving time and writing less CSS.

Imagine that you have a primary and a secondary button.
They are very similar, but you want your primary button to have a flashy color so people actually click on it.
 */


/* You can do that by adding a primary attribute to your <Button />... */

export default function App() {
  return (
    <Wrapper>
      <Button>Hello, I am a Button</Button>
      <Button primary>Hello, I am a Primary Button</Button>
    </Wrapper>
  );
}

/* ...and handling that new attribute on your styled component, exactly like you would with component props!
 */
const Button = styled.button`
  background: ${props => props.primary ? "#6495ED" : "#2b2b2b"};
  color: white;
  font-size: 24px;
  padding: 12px;
  cursor: pointer;
`;

"But what if my component needs a lot of customization?"

/* It may happen that your buttons need to be extra flexible, while still sharing some basic styles. Maybe you need to have a primary button that also has rounded corners and a fancy box-shadow.

You can do that by applying the same logic as the earlier example. But that can get quite repetitive, look:
 */

const Button = styled.button`
  background: ${props => props.primary ? "#6495ED" : "#2b2b2b"};
  border-radius: ${props => props.round ? "4px" : "0"};
  box-shadow: ${props => props.shadow ? "2px 2px 2px rgba(0, 0, 0, 0.5)" : "none"};
  color: white;
  font-size: 24px;
  padding: 12px;
  cursor: pointer;
`;

/* What you can do here instead is "lift" the props and do something like that: */

const Button = styled.button(
  ({ primary, round, shadow }) => `
    background: ${primary ? "#6495ED" : "#2b2b2b"};
    border-radius: ${round ? "4px" : "0"};
    box-shadow: ${shadow ? "2px 2px 2px rgba(0, 0, 0, 0.5)" : "none"};
    color: white;
    font-size: 24px;
    padding: 12px;
    cursor: pointer;
  `
);
/*
That way, instead of "importing" each prop on a per-line basis, you do it at the very beginning of your styles, so you can be 100% sure of what makes it dynamic!

Just keep in mind that while this technique is cool and makes your styled components look leaner, needing extensive customization might be a sign of bad abstraction.

So before adding a fourth (or fifth) dynamic style rule, make sure that you shouldn't really be creating a new styled component! */