Role-based Pages

We’re gonna have 3 pages for accessing protected data:

    BoardUser page calls UserService.getUserBoard()
    BoardModerator page calls UserService.getModeratorBoard()
    BoardAdmin page calls UserService.getAdminBoard()

I will show you User Page for example, other Pages are similar to this Page.

components/BoardUser.js

import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardUser;

You can simplify import statement with:
Absolute Import in React