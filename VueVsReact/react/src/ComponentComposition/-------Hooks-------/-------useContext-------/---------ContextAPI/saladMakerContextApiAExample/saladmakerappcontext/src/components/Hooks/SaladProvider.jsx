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

        // I can do this

        prevState.concat(
          prevState.includes(newState.name || newState.id)
            ? []
            : { ...newState, id: Math.random() }
        )

      // Why cant i do this
      /* prevState.map((prevState) => {
        if (prevState.name !== newState.name) {
          console.log("PREVSTATENAME IS TRUE", prevState);
          return {
            ...newState,
            id: Math.random(),
          };
        } else {
          console.log("PREVSTATENAME IS FALSE");
          return [];
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
    console.log(salads);

    return setSalads(salads.filter((salad) => salad.id !== id));
  }

  return (
    <SaladContext.Provider value={{ salads, addSalad, removeSalad }}>
      {children}
    </SaladContext.Provider>
  );
}
