/* Remove from array
 */

const handleRemove = (todo) => {
  const newTodos = todos.filter((t) => t !== todo);
  setTodos(newTodos);
};
