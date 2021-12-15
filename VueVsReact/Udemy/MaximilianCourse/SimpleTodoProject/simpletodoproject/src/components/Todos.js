import { useState, useEffect } from "react";
import { fetchTodos } from "../helpers/ApiHandler";
import TodosView from "./TodosView";
import Input from "./input";
import Button from "./button";

const TodosComponent = () => {
  const [todosState, setTodos] = useState();
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const data = fetchTodos();
    setTodos(data);
  }, [todosState]);

  const addTodo = (todo) => {
    setTodos([...todosState, todo]);
  };

  // function deleteTodo
  const deleteTodo = (id) => {
    setTodos(todosState.filter((todo) => todo.id !== id));
  };

  //function updateTodo
  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todosState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            ...updatedTodo,
          };
        }
        return todo;
      })
    );
  };

  const toggleInput = () => {
    setToggled((toggled) => !toggled);
  };

  return (
    <div>
      {todosState.map((todo) => (
        <>
          <TodosView
            key={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
          <Button type="submit" onClick={() => addTodo(todo)} />

          <Button type="submit" onClick={() => deleteTodo(todo.id)} />

          <Button type="submit" onClick={() => toggleInput()} />

          <Input
            toggled={toggled}
            todoId={todo.id}
            updateTodo={() => updateTodo()}
          />
        </>
      ))}
    </div>
  );
};

export default TodosComponent;
