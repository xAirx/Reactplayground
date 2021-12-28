import React, { useState, createContext } from "react";

export const SaladContext = createContext(null);

export default function SaladProvider({ children }) {
  const [salads, setSalads] = useState([]);

  function addSalad(newState) {
    console.log("RUNNING ADDSALAD");
    console.log("THIS IS NEW STATE", newState);
    setSalads(
      (prevState) =>
        // Grab previous state and check for name
        prevState.concat(prevState.includes(newState.name) ? [] : newState.name)

      /*       prevState.concat(prevState.map((prevState) => prevState.name === name) ? [] : name)
       */
      /* prevState.map((prevstate) => {
        if (prevstate.name === newState.name) {
          console.log("PREVSTATENAME IS TRUE", prevstate);
          return {
            prevstate,
          };
        } else {
          console.log("PREVSTATENAME IS FALSE", { ...prevState, newState });
          //return prevstate.concat(newState);

          //return { ...prevstate, newState };

          //return [...prevstate, newState];

          //const newSaladState = [...prevstate];
          //newSaladState.push(newState);
          //return newSaladState;
        }
      }) */
    );
  }

  function removeSalad(id) {
    console.log("RUNNING RemoveSalad");
    console.log("THIS IS id", id);

    setSalads((prevState) =>
      // Grab previous state and check for name
      prevState.filter((prevState) => prevState.id !== id)
    );
  }

  return (
    <SaladContext.Provider value={{ salads, addSalad, removeSalad }}>
      {children}
    </SaladContext.Provider>
  );
}
