/* Authentication service

The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important functions:

    login(): POST {username, password} & save JWT to Local Storage
    logout(): remove JWT from Local Storage
    register(): POST {username, email, password}
    getCurrentUser(): get stored user information (including JWT)

services/auth.service.js */

import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};

//the-guild.dev/blog/injectable-services-in-react

// auth-service.jsx
https: import React from "react";

const { createContext, useContext } = React;

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const value = {
    signIn: props.signIn || signIn,
    signUp: props.signUp || signUp,
  };

  return (
    <AuthProvider.Provider value={value}>
      {props.children}
    </AuthProvider.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const signUp = (body) => {
  // ...
};

const signIn = (body) => {
  // ...
};

// auth-components.jsx
import React from "react";
import { useAuth } from "./auth-service";

const { useCallback } = React;

export const SignInButton = ({ username, password, onSignIn }) => {
  const auth = useAuth();

  const signIn = useCallback(() => {
    auth.signIn({ username, password }).then(onSignIn);
  }, [username, password, onSignIn]);

  // ...
};

export const SignInButton = ({
  username,
  password,
  verifiedPass,
  onSignUp,
}) => {
  const auth = useAuth();

  const signUp = useCallback(() => {
    auth.signUp({ username, password, verifiedPass }).then(onSignUp);
  }, [username, password, verifiedPass, onSignUp]);

  // ...
};

// auth-components.test.jsx
import React from "react";
import { act, render, fireEvent } from "@testing-library/react";
import { SignInButton, SignUpButton } from "./auth-components";

describe("SignInButton", () => {
  test("invokes callback on successful sign-in", () => {
    const onSignIn = jest.fn();

    const { getByTestId } = render(
      <AuthProvider signIn={Promise.resolve}>
        <SignInButton onSignIn={onSignIn} />
      </AuthProvider>
    );

    // ...
  });
});

describe("SignUpButton", () => {
  test("invokes callback on successful sign-up", () => {
    const onSignUp = jest.fn();

    const { getByTestId } = render(
      <AuthProvider signUp={Promise.resolve}>
        <SignUpButton onSignUp={onSignUp} />
      </AuthProvider>
    );

    // ...
  });
});
