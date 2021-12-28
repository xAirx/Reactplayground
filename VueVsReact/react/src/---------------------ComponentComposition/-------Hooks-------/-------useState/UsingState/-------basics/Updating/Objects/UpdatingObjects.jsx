Objects;

const [todos, setTodos] = useState({});

/* Add to object
 */
const handleAdd = (todo) => {
  const newTodos = Object.assign({}, todos);
  newTodos[todo.id] = todo;
  setTodos(newTodos);
};

/* We can use spread operator to create shallow copy as well.
 */
const handleAdd = (todo) => {
  const newTodos = { ...todos };
  newTodos[todo.id] = todo;
  setTodos(newTodos);
};

/* Similar to arrays, there's a shortcut for doing this in one line:
 */
const handleAdd = (todo) => {
  setTodos({ ...todos, [todo.id]: todo });
};

/* Update object
 */

/* Same as adding, it will overwrite the value if the key already exists.
 */

const handleUpdate = (todo) => {
  setTodos({ ...todos, [todo.id]: todo });
};
