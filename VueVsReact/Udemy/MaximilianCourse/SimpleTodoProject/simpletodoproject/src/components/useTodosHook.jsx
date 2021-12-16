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
