/* Partial
Partial<T> is a utility that will take a given type and return a new type where all of it's properties are optional.
This is beneficial when you want something that is not constrained by certain properties being required.
However, this utility type does not discriminate in forcing some of the properties to remain required.
 To accomplish this functionality we will reach for Pick or Omit instead.
 I find this utility helpful for areas where I want to provide overrides, such as this testing approach with React Testing Library. */

import React, { ReactNode } from "react";
import { render as renderRtl } from "@testing-library/react";

interface BasicButtonProps {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
  type: "button" | "submit" | "reset";
}

const render = (overrides: Partial<BasicButtonProps> = {}) => {
  const baseProps = {
    children: "Hello World",
    disabled: false,
    onClick: jest.fn(),
    type: "button",
  };
  const opts = { ...baseProps, ...overrides };
  return renderRtl(
    <button type={opts.type} disabled={opts.disabled} onClick={opts.onClick}>
      {opts.children}
    </button>
  );
};
/* Here we have a customized render function that has a base set of props for a component. This allows us to set the happy path for most of our test cases,
 where we can call render() and receive all of our queries from React Testing Library. If there are cases where we want to test other cases,
 such as when the button is disabled, we can pass in the overrides we care about such as render({ disabled: true }). I have found that this
eliminates a lot of repetition in component test set up, and provides a declarative way of testing the component with different props. */
