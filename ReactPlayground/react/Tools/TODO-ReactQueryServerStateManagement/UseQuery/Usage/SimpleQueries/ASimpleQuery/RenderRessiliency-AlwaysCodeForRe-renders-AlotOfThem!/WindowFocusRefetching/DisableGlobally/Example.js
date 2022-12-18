/* Disabling Globally */
//
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

function App () {
    return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
}