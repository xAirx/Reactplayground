import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*   useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }) */

  // run this code once when the app starts.
  useEffect(() => {
    console.log("running useEffect");
    checkLoginStatus();
    // we want to run it every component reevalutation - re-render
    // if a certain DP changed.
  }, []);

  const checkLoginStatus = () => {
    console.log("checking LogInStatus");
    localStorage.getItem("loggedIn")
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // set logged in in localStorage
    localStorage.setItem("loggedIn", true);
    /* localStorage.setItem("loggedIn", 1); */
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedIn");
    /* localStorage.setItem("loggedIn", 0); */
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} logoutHandler={logoutHandler} />
      <main>
        {!isLoggedIn && <Login loginHandler={loginHandler} />}
        {isLoggedIn && <Home logoutHandler={logoutHandler} />}
        {/* the only differnce is that () => foo()  creates an arrow function that also calls foo, while just onClick={foo} only calls foo.
        Use arrow functions when you need to send arguments to the function, eg:
          () => loginHandler("someArgument")

        {!isLoggedIn && <Login onLogin={() => loginHandler} />}
        */}
      </main>
    </>
  );
}

export default App;
