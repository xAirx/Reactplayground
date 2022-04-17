import { useMutation, useQueryClient } from 'react-query'

const queryClient = useQueryClient()

// When this mutation succeeds, invalidate any queries with the `todos` or `reminders` query key
const mutation = useMutation(addTodo, {
    onSuccess: () => {
        queryClient.invalidateQueries('todos')
        queryClient.invalidateQueries('reminders')
    },
})

/* You can wire up your invalidations to happen using any of the callbacks available in the useMutation hook
 */