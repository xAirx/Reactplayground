import React, { createContext } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  /*  const [salads, setSalads] = useState([]); */

  const user = {
    name: "Kwame",
    favorites: ["avocado", "carrot"],
  };

  /*  function addSalad(name) {
    setSalads((prevState) =>
      // Grab previous state and check for name
      prevState.concat(prevState.includes(name) ? [] : name)
    );
  } */

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
