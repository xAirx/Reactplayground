/* Query Functions
A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.

All of the following are valid query function configurations: */

useQuery(['todos'], fetchAllTodos)

useQuery(['todos', todoId], () => fetchTodoById(todoId))

useQuery(['todos', todoId], async () => {
    const data = await fetchTodoById(todoId)
    return data
})

useQuery(['todos', todoId], ({ queryKey }) => fetchTodoById(queryKey[1]))