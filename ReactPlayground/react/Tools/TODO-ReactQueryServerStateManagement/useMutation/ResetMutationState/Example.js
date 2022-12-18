const CreateTodo = () => {
    const [title, setTitle] = useState('')
    const mutation = useMutation(createTodo)

    const onCreateTodo = e => {
        e.preventDefault()
        mutation.mutate({ title })
    }

    return (
        <form onSubmit={onCreateTodo}>
            {mutation.error && (
                <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
            )}
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <br />
            <button type="submit">Create Todo</button>
        </form>
    )
}
