import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  useState,
} from "react";

// We pass generic to the props which extends ElementType (ButtonProps<T extends ElementType>).
// Element type is a nifty react utillity which allows us to pass a type to the props.
// This is a generic type which allows us to pass a type to the props.
// This is a nifty react utility which allows us to pass a type to the props.

type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// Passing the generic to the renderAs? prop will make sure the button is rendered AS generic.

// Finally we add componentPropsWithoutRef to the props which extends ElementType (ButtonProps<T extends ElementType>).

// If we will specify RenderAS as button we will automatically get all standard button props whereas if 'a' will be specified we will get link props

// such as href, target, rel, etc.

import styled from "styled-components";

export const BTN = styled.button`
  background-color: ${(props) => (props.isLoading ? "orange" : "lightblue")};
  color: ${(props) => (props.isLoading ? "white" : "black")};
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
  width: 30rem;
  height: 30rem;
`;

// Ultimatebutton is set af button by default
const UltimateButton = <T extends ElementType = "button">({
  renderAs,
  isLoading,
  isCompleted,
  children,
  ...rest
}: ButtonProps<T>): JSX.Element => {
  return (
    <styled.BTN
      as={renderAs}
      isLoading={isLoading}
      isCompleted={isCompleted}
      {...rest}
    ></styled.BTN>
  );
};

// will throw an error
<UltimateButton href="https://google.com">Click me</UltimateButton>;

import react from "react";

//import ultimateButton from "./UltimateButton";

const Main = () => {
  return (
    <div>
      <UltimateButton
        renderAs="a"
        href="https://google.com"
        target="_blank"
        rel="noopener"
      >
        Click me
      </UltimateButton>
    </div>
  );
};

// render ultimatebutton as a button

const [completed, setCompleted] = useState(false);

const handleComplete = () => {
  setCompleted(!completed);
};

const MainWrapper = () => {
  return (
    <div>
      <UltimateButton
        isCompleted={completed}
        renderAs="button"
        onClick={handleComplete}
      >
        Click me
      </UltimateButton>
    </div>
  );
};
