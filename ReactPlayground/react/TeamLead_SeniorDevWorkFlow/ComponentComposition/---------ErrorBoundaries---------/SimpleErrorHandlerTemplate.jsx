import React from "react";
import { useLocation } from "react-router-dom";
import { get } from "lodash";
import Page404 from "./Page404";

const ErrorHandler = ({ children }) => {
  const location = useLocation();

  switch (get(location.state, "errorStatusCode")) {
    case 404:
      return <Page404 />;

    // ... cases for other types of errors

    default:
      return children;
  }
};

export default ErrorHandler;



import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => (
  <div>
    <h1>Four:oh:four</h1>
    <Link to="/">Back</Link>
  </div>
);

export default Page404;
