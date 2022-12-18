import React, { useState } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

function Todos({ initialTodos }) {
  // Storing derived state problem.
  __________________________________;
  /*   When clicking the todos.completed button, its not working as intended */
  https://www.youtube.com/watch?v=0yzoAbrjV6k&list=PLZlA0Gpn_vH-xGQ-nQ87rXI7QkM6W3E79&index=7
  // the selected todos is not checked aswell.

  // The problem with derived state
  // Here is that in selectedTodo, we have a copy of TODOS, instead of a copy we want a reference to it.
  // So they both are the exact same object (reference)


  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodo, setSelectedTodo] = useState();

  // Solution:

  const [todos, setTodos] = useState(initialTodos);
  // Instead of storing a copy of todos, we store a reference here, (the todoID.)
  // we are getting the ID from the current todo state object (correct reference)
  const [selectedTodoId, setSelectedTodoId] = useState();
  // we are getting the ID from the current todo state object (correct reference)
  const selectedTodo = todos.find((todo) => todo.id === selectedTodoId);  // this is the correct reference;