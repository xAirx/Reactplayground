import { useState, useEffect } from "react";
import { fetchTodos } from "../helpers/ApiHandler";
import TodosView from "./TodosView";
import Input from "./input";
import Button from "./button";
import useTodosHook from "../components/useTodosHook";

const TodosComponent = () => {
  const { todosState, addTodo, deleteTodo, updateTodo, toggleInput } =
    useTodosHook();

  <div>
    {todosState.map((todo) => (
      <>
        <TodosView key={todo.id} name={todo.name} completed={todo.completed} />
        <Button type="submit" onClick={() => addTodo(todo)} />

        <Button type="submit" onClick={() => deleteTodo(todo.id)} />

        <Button type="submit" onClick={() => toggleInput()} />

        {/* // Another way to do it

        <Button type="submit" onClick={addTodo(todo)} /> */}

        <Input
          toggled={toggled}
          todoId={todo.id}
          updateTodo={() => updateTodo()}
        />

        {/*  // render prop */}
        {/* <TodoForm
          saveTodo={(todoText) => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              addTodo(trimmedText);
            }
          }}
        /> */}

        {/*  const TodoForm = ({ saveTodo }) => {
          const { value, reset, onChange } = useInputState();

          return (
            <form
              onSubmit={event => {
                event.preventDefault();

                saveTodo(value);
                reset();
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={value}
              />
          </form>
        ); */}
      </>
    ))}
  </div>;
};

export default TodosComponent;
