/* If your query function depends on a variable, include it in your query key
Since query keys uniquely describe the data they are fetching, they should include any variables you use in your query function that change.For example:
 */
function Todos ({ todoId }) {
    const result = useQuery(['todos', todoId], () => fetchTodoById(todoId))
}
