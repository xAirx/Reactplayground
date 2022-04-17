const queryClient = useQueryClient()

const mutation = useMutation(editTodo, {
    onSuccess: data => {
        queryClient.setQueryData(['todo', { id: 5 }], data)
    }
})

mutation.mutate({
    id: 5,
    name: 'Do the laundry',
})

// The query below will be updated with the response from the
// successful mutation
const { status, data, error } = useQuery(['todo', { id: 5 }], fetchTodoById)

/* You might want to tie the onSuccess logic into a reusable mutation, for that you can create a custom hook like this:
 */

const useMutateTodo = () => {
    const queryClient = useQueryClient()

    return useMutation(editTodo, {
        // Notice the second argument is the variables object that the `mutate` function receives
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['todo', { id: variables.id }], data)
        },
    })
}