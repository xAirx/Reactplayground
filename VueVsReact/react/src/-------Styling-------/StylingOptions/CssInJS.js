/* Styled components are modern and easy to use
and it allows you to take advantage of all the
features of plain CSS as well.

In my opinion, it is easier to use and more
powerful than MaterialUI(you can also style MaterialUI
    components with this, instead of using makeStyles).
    It's also better than importing a CSS file since it
    is scoped and styled components are reusable. */

import React from "react";
import styled, { css } from "styled-components";

// Use Title and Wrapper like any other React component – except they're styled!
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
`;

function StyledComponent() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  );
}

export default StyledComponent;
