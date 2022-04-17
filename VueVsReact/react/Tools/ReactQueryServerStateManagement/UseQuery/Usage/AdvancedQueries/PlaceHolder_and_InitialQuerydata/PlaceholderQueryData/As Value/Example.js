/* Placeholder Data as a Value */
function Todos () {
    const result = useQuery('todos', () => fetch('/todos'), {
        placeholderData: placeholderTodos,
    })
}
