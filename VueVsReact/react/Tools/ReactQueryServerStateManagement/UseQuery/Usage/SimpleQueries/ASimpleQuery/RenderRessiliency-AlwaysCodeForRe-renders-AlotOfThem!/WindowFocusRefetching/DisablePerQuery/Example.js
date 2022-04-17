
/* Disabling Per-Query */

useQuery('todos', fetchTodos, { refetchOnWindowFocus: false })
/*
Custom Window Focus Event
In rare circumstances, you may want to manage your own window focus events that trigger React Query to revalidate.
To do this, React Query provides a focusManager.setEventListener function that supplies you the callback that should
be fired when the window is focused and allows you to set up your own events. When calling focusManager.setEventListener,
the previously set handler is removed (which in most cases will be the default handler) and your new handler is used instead.
For example, this is the default handler:
 */

focusManager.setEventListener(handleFocus => {
    // Listen to visibilitychange and focus
    if (typeof window !== 'undefined' && window.addEventListener) {
        window.addEventListener('visibilitychange', handleFocus, false)
        window.addEventListener('focus', handleFocus, false)
    }

    return () => {
        // Be sure to unsubscribe if a new handler is set
        window.removeEventListener('visibilitychange', handleFocus)
        window.removeEventListener('focus', handleFocus)
    }
})