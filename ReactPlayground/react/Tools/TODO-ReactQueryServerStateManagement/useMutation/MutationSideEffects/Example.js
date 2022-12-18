useMutation(addTodo, {
    onMutate: variables => {
        // A mutation is about to happen!

        // Optionally return a context containing data to use when for example rolling back
        return { id: 1 }
    },
    onError: (error, variables, context) => {
        // An error happened!
        console.log(`rolling back optimistic update with id ${context.id}`)
    },
    onSuccess: (data, variables, context) => {
        // Boom baby!
    },
    onSettled: (data, error, variables, context) => {
        // Error or success... doesn't matter!
    },
})


/* When returning a promise in any of the callback functions it will first be awaited before the next callback is called:
 */
useMutation(addTodo, {
    onSuccess: async () => {
        console.log("I'm first!")
    },
    onSettled: async () => {
        console.log("I'm second!")
    },
})

/* You might find that you want to trigger additional callbacks than the ones defined on useMutation when calling mutate. This can be used to trigger component-specific side effects. To do that, you can provide any of the same callback options to the mutate function after your mutation variable. Supported overrides include: onSuccess, onError and onSettled. Please keep in mind that those additional callbacks won't run if your component unmounts before the mutation finishes.
 */

useMutation(addTodo, {
    onSuccess: (data, variables, context) => {
        // I will fire first
    },
    onError: (error, variables, context) => {
        // I will fire first
    },
    onSettled: (data, error, variables, context) => {
        // I will fire first
    },
})

mutate(todo, {
    onSuccess: (data, variables, context) => {
        // I will fire second!
    },
    onError: (error, variables, context) => {
        // I will fire second!
    },
    onSettled: (data, error, variables, context) => {
        // I will fire second!
    },
})
