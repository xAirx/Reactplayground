

  // we can use the spread operator to take the previous state and then modify it.
https://www.youtube.com/watch?v=0yzoAbrjV6k&list=PLZlA0Gpn_vH-xGQ-nQ87rXI7QkM6W3E79&index=7
  // Map returns us a new array without changing anything in the original array.
  // We check if we have current ID
  // instead of modifying our todo, we create a new object.
  // We dont modify anything in the existing array.

  function handleToggleComplete(todoId) {
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

  function handleSelect(todoId) {
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
