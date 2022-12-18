/* Retry Delay
By default, retries in React Query do not happen immediately after a request fails.As is standard, a back - off delay is gradually applied to each retry attempt.

The default retryDelay is set to double(starting at 1000ms) with each attempt, but not exceed 30 seconds:
 */

// Configure for all queries

import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
        },
    },
})

function App () {
    return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
}

/* Though it is not recommended, you can obviously override the retryDelay function/integer in both the
Provider and individual query options. If set to an integer instead of a function the delay will always be the same amount
of time: */

const result = useQuery('todos', fetchTodoList, {
    retryDelay: 1000, // Will always wait 1000ms to retry, regardless of how many retries
})