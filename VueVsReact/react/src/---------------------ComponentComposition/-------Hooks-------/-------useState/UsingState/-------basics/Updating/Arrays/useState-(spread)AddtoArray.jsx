const [todos, setTodos] = useState([]);

/* Add to array */

const handleAdd = (todo) => {
  const newTodos = todos.slice();
  newTodos.push(todo);
  setTodos(newTodos);
};

/* The spread operator is syntactic sugar for creating a new copy of a reference.
 */
const handleAdd = (todo) => {
  const newTodos = [...todos];
  newTodos.push(todo);
  setTodos(newTodos);
};

/* We can also use the spread operator to create copy and append an item with the following syntax:
 */

const handleAdd = (todo) => {
  setTodos([...todos, todo]);
};
