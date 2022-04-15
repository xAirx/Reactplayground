/*
A new cache entry

Because the query key is used as a key for the cache, you will get a new cache entry when you switch from 'all' to 'done',
 and that will result in a hard loading state(probably showing a loading spinner) when you switch for the first time.

 This is certainly not ideal, so you can either use the keepPreviousData option for these cases, or, if possible, pre -
 fill the newly created cache entry with initialData.

 The above example is perfect for that, because we can do some client side pre - filtering on our todos:
 */

type State = "all" | "open" | "done";

type Todo = {
  id: number;
  state: State;
};

type Todos = ReadonlyArray<Todo>;

// Axios example
const fetchTodos = async (state: State): Promise<Todos> => {
  const response = await axios.get(`todos/${state}`);
  return response.data;
};

// useQueryExample
export const useTodosQuery = (state: State) =>
  useQuery(["todos", state], () => fetchTodos(state), {
    initialData: () => {
      const allTodos = queryCache.getQuery<Todos>(["todos", "all"]);
      const filteredData =
        allTodos?.filter((todo) => todo.state === state) ?? [];

      return filteredData.length > 0 ? filteredData : undefined;
    },
  });

/* Now, every time the user switches between states, if we don't have data yet, we try to pre-fill it with data from the 'all todos' cache.
We can instantly show the 'done' todos that we have to the user, and they will still see the updated list once the background fetch finishes.
Please note that prior to v3, you would also need to set the initialStale property to actually trigger a background fetch.

I think this is a great ux improvement for just a few lines of code. */
