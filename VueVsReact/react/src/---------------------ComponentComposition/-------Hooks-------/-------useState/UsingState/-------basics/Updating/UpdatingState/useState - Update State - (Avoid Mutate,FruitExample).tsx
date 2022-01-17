/* ⁉️ Why?

I don’t mutate non-primitive values in states directly. Never ever. This can provide many problems in React backstages.
💻 How?

I use the useState hook to handle my state updates for simple cases. I prefer to use Types or Interfaces to declare non-primitive states. Also, I can add the initial state:
 */
type Fruit = {
  id: string;
  title: string;
  inStock: boolean;
};

const initialFruits: Fruit[] = [
  {
    id: "fruit1",
    title: "Apple",
    inStock: false,
  },
  {
    id: "fruit2",
    title: "Orange",
    inStock: false,
  },
];

/* useState returns the state value and the function to update it:
 */
const [fruits, setFruits] = useState(initialFruits);

// Logs the fruits state.
console.log(fruits);

// Updates the fruit with the current ID.
const handleUpdateFruits = (id: string) => {
  setFruits((prevFruits) =>
    prevFruits.map((fruit) => {
      return fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit;
    })
  );
};

/* 📌 Example!

The simple React component example:
 */
import React, { useState } from "react";

type Fruit = {
  id: string;
  title: string;
  inStock: boolean;
};

const initialFruits: Fruit[] = [
  {
    id: "fruit1",
    title: "Apple",
    inStock: false,
  },
  {
    id: "fruit2",
    title: "Orange",
    inStock: false,
  },
];

export const App = () => {
  const [fruits, setFruits] = useState(initialFruits);

  const handleUpdateFruits = (id: string) => {
    setFruits((prevFruits) =>
      prevFruits.map((fruit) => {
        return fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit;
      })
    );
  };

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li
            key={fruit.id}
            onClick={() => handleUpdateFruits(fruit.id)}
            style={{ textDecoration: fruit.inStock ? "none" : "line-through" }}
          >
            {fruit.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
