function Todos () {

    const (isLoading, isError, data, error) = useQuery('todos', fetchTodoList);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (
        <div>
            <ul>
                {data.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )

}

/* If booleans aren't your thing, you can always use the status state as well:
 */

function Todos () {
    const { status, data, error } = useQuery('todos', fetchTodoList)

    if (status === 'loading') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }

    // also status === 'success', but "else" logic works, too
    return (
        <ul>
            {data.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}
