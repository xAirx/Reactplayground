// Generic Input component

import { useState, useEffect } from "react";
import { updateTodo, toggled } from "./TodosState";

function Input({ todoId, updateTodo }) {
  // const so we cant change it, only with our setter
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      {toggled ? (
        <form onSubmit={() => updateTodo(todoId, newTodo)}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            required
          />
          <button type="submit">Update Todo</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default Input;
