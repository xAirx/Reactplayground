/* Dynamic Parallel Queries with useQueries
If the number of queries you need to execute is changing from render to render, you cannot use manual querying since that would violate the rules of hooks.Instead, React Query provides a useQueries hook, which you can use to dynamically execute as many queries in parallel as you'd like.

useQueries accepts an array of query options objects and returns an array of query results:
 */


function App ({ users }) {
    const userQueries = useQueries(
        users.map(user => {
            return {
                queryKey: ['user', user.id],
                queryFn: () => fetchUserById(user.id),
            }
        })
    )
}