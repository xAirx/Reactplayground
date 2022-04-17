/* Consecutive mutations
There is a slight difference in handling onSuccess, onError and onSettled callbacks when it comes to consecutive mutations.
When passed to the mutate function, they will be fired up only once and only if the component is still mounted. This is due to the fact that mutation observer is removed and resubscribed every time when the mutate function is called. On the contrary, useMutation handlers execute for each mutate call.

Be aware that most likely, mutationFn passed to useMutation is ansynchronous.
In that case, the order in which mutations are fulfilled may differ from the order of mutate function calls.
 */

useMutation(addTodo, {
    onSuccess: (data, error, variables, context) => {
        // Will be called 3 times
    },
})

['Todo 1', 'Todo 2', 'Todo 3'].forEach((todo) => {
    mutate(todo, {
        onSuccess: (data, error, variables, context) => {
            // Will execute only once, for the last mutation (Todo 3),
            // regardless which mutation resolves first
        },
    })
})
