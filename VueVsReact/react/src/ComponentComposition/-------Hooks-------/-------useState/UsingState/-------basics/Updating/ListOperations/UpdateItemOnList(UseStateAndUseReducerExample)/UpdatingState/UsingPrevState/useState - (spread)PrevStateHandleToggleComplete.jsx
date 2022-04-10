

// we can use the spread operator to take the previous state and then modify it.
https://www.youtube.com/watch?v=0yzoAbrjV6k&list=PLZlA0Gpn_vH-xGQ-nQ87rXI7QkM6W3E79&index=7
// Map returns us a new array without changing anything in the original array.
// We check if we have current ID
// instead of modifying our todo, we create a new object.
// We dont modify anything in the existing array.

function handleToggleComplete (todoId) {
  setTodos((currTodos) => {
    return currTodos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  });
}

/////////////////////////////////////////////////////////////////////////////

function handleSelect (todoId) {
  setSelectedTodo(todos.find((todo) => todo.id === todoId));
}

return (
  <>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        handleToggleComplete={handleToggleComplete}
        handleSelect={handleSelect}
      />
    ))}
    <h3>Selected Todo</h3>
    {selectedTodo && (
      <Todo
        key={selectedTodo.id}
        todo={selectedTodo}
        handleSelect={handleSelect}
        handleToggleComplete={handleToggleComplete}
      />
    )}
  </>
);
}

Todos.propTypes = {
  initialTodos: PropTypes.array,
};

export default Todos;








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



///////////////////// EXAMPLE 2

const [state, setState] = useState({});
setState((prevState) => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues };
});

// Another example

// Using an object as state, we have to remember to spread
// The previous state.
const [state, setState] = React.useState({ count: 4, theme: "blue" });
const count = state.count;
const theme = state.theme;

function decrementCount () {
  // When you use the setState value it is not merging like it does in
  // Class Components.

  // In classcomponents it would merge the state object with the current state.
  // It is overwriting it.

  // Since it is being overwritten we have to use the spread operator
  // For the previous state.

  // Automatic merging does not happen, because when we use useState,
  // it will become asynchronous. since we can have multiple state instances.
  setState((prevState) => ({
    ...prevState,
    count: prevState.count - 1,
  }));
}

function decrementCount2 () {
  setState((prevState) => {
    return { ...prevState, count: prevState.count - 1 };
  });
}

function changeColor () {
  setState((prevState) => {
    return { ...prevState, count: prevState.count - 1 };
  });
}
