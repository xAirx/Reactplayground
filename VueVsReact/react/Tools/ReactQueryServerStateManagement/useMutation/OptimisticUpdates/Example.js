/* Updating a list of todos when adding a new todo */


const queryClient = useQueryClient()

useMutation(updateTodo, {
    // When mutate is called:
    onMutate: async newTodo => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries('todos')

        // Snapshot the previous value
        const previousTodos = queryClient.getQueryData('todos')

        // Optimistically update to the new value
        queryClient.setQueryData('todos', old => [...old, newTodo])

        // Return a context object with the snapshotted value
        return { previousTodos }
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
        queryClient.setQueryData('todos', context.previousTodos)
    },
    // Always refetch after error or success:
    onSettled: () => {
        queryClient.invalidateQueries('todos')
    },
})


/* Updating a single todo */
useMutation(updateTodo, {
    // When mutate is called:
    onMutate: async newTodo => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['todos', newTodo.id])

        // Snapshot the previous value
        const previousTodo = queryClient.getQueryData(['todos', newTodo.id])

        // Optimistically update to the new value
        queryClient.setQueryData(['todos', newTodo.id], newTodo)

        // Return a context with the previous and new todo
        return { previousTodo, newTodo }
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newTodo, context) => {
        queryClient.setQueryData(
            ['todos', context.newTodo.id],
            context.previousTodo
        )
    },
    // Always refetch after error or success:
    onSettled: newTodo => {
        queryClient.invalidateQueries(['todos', newTodo.id])
    },
})

/* You can also use the onSettled function in place of the separate onError and onSuccess handlers if you wish: */

useMutation(updateTodo, {
    // ...
    onSettled: (newTodo, error, variables, context) => {
        if (error) {
            // do something
        }
    },
})
