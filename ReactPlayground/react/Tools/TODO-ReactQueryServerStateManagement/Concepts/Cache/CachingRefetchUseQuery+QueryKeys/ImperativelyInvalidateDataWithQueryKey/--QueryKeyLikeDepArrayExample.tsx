/* Treat the query key like a dependency array
I am referring to the dependency array of the useEffect hook here, which I assume you are familiar with.

Why are these two similar?

Because React Query will trigger a refetch whenever the query key changes.
So when we pass a variable parameter to our queryFn, we almost always want to fetch data when that value changes.
Instead of orchestrating complex effects to manually trigger a refetch, we can utilize the query key: */

/* feature/todos/queries.ts */

type State = "all" | "open" | "done";

type Todo = {
  id: number;
  state: State;
};

type Todos = ReadonlyArray<Todo>;

// AXIOS EXAMPLE
const fetchTodos = async (state: State): Promise<Todos> => {
  const response = await axios.get(`todos/${state}`);
  return response.data;
};

// React Query
export const useTodosQuery = (state: State) =>
  useQuery(["todos", state], () => fetchTodos(state));

/*
Here, imagine that our UI displays a list of todos along with a filter option.

We would have some local state to store that filtering, and as soon as the user changes their selection,
we would update that local state, and React Query will automatically trigger the refetch for us,
because the query key changes.

We are thus keeping the user's filter selection in sync with the query function,
which is very similar to what a dependency array represents for useEffect.

I don't think I have ever passed a variable to the queryFn that was not part of the queryKey, too.
 */
