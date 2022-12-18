// When you reuse a custom hook in multiple components
// The actual state of the component is not shared between the components.
// The state is isolated.

https://stackoverflow.com/questions/55133275/whats-the-difference-between-stateful-logic-and-state-in-react

// the State will be a seperate instance of state data for each use of a hook.

// Stateful logic is any code that uses state
// in case of hooks you can use the useState hook to create a stateful logic

// A fresh instance of the state variable is created for each use of the hook.
// The state variable is instantiated at each and every place of use of that particular hook.
// The states in the hook is not shared between the users of that custom hook.
// Every time you use a custom hook, all state and effetcs inside of it are fully isolated.

const useTodosHook = () => {
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

  return [toggled, todosState, addTodo, deleteTodo, updateTodo, toggleInput];
};

export default useTodosHook;
