function Todos () {
    const { status, data: todos, error, isFetching } = useQuery(
        'todos',
        fetchTodos
    )

    return status === 'loading' ? (
        <span>Loading...</span>
    ) : status === 'error' ? (
        <span>Error: {error.message}</span>
    ) : (
        <>
            {isFetching ? <div>Refreshing...</div> : null}

            <div>
                {todos.map(todo => (
                    <Todo todo={todo} />
                ))}
            </div>
        </>
    )
}
