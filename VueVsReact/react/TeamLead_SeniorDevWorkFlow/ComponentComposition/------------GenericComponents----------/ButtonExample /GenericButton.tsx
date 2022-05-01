import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";

type ButtonProps = {
  type?: "submit" | "reset" | "button";
  size: number;
  variant: string;
  children: React.ReactNode;
};

function Button({ type, size, variant, children }: ButtonProps) {
  const [buttonSize] = useState(size);
  const [buttonVariant] = useState(variant);

  return (
    <button type={type} className={`btn-${variant} btn-${size}`}>
      {children}
    </button>
  );
}

export default Button;

// Start with creating the interface for the button
// What do we want it to do?

interface ButtonProps2 {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  children: ReactNode; // can be any type with ReactNode

  onClick: () => void; // onclick support.
}

// We can do way better
/* Let’s imagine that we would want to add more and more standard button props (aria labels for example),
so we would end up constantly reflecting this in the interface. */

/* Not only can we do this automatically, but we can also preserve all the
 Typescript type safety and code-hinting by
 simply extending already existing standard interfaces. */

interface ButtonProps extends React.ComponentPropsWIthoutRef<"button"> {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  children: ReactNode; // can be any type with ReactNode
}

/* Notice how our interface extends React.ComponentPropsWithoutRef with the ‘button’ generic.

This simply means that our button will be able to get onClick and all standard native button props - automatically. Which is cool! */

/* Alternatives to this approach
Actually there are several ways to perform this trick with type extension. You can also end up doing something like this (also valid): */

/* interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  name?: string | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}
 */
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  children: ReactNode;
}
