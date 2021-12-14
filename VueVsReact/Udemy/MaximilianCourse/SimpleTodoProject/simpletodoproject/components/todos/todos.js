import { useState, useEffect } from "react";

const Todos = ({ Todos }) => {
  const [todos, setTodos] = useState(Todos);
  const [newTodos, deleteTodo] = useState(Todos);

  useEffect(
    (Todos) => {
      setTodos(Todos);
    },
    [Todos]
  );

  function deleteTodos(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function addTodo(todo) {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>{todo.text}</li>
            <input type="checkbox" value={todo.completed} />
            <button text="Delete" onClick={() => deleteTodos(todo.id)} />
            <button test="AddTodo" onClick={() => addTodo(todo)} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
