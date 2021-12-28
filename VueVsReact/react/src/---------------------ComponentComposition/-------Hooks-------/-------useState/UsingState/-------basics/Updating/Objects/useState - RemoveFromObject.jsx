/* Remove from object
 */
const handleRemove = (todo) => {
  const newTodos = { ...todos };
  delete newTodos[todo.id];
  setTodos(newTodos);
};
