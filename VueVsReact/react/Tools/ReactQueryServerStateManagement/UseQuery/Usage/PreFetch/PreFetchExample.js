https://medium.com/myanlearn-blog/myanlearn-x-react-query-313ccfdae915

/* Let’s say the user is on Landing page.
We know in advanced that the user can go to only page a, b, or c.
So, we prefetch the data for those pages immediately after the data on Landing page is loaded.
So, when the user goes to, for example, page a, it is already loaded and the experience is very smooth. */

const prefetchTodos = async () => {
    // The results of this query will be cached like a normal query
    await queryClient.prefetchQuery('todos', fetchTodos)
}

/*  If data for this query is already in the cache and not invalidated, the data will not be fetched
 If a staleTime is passed eg. prefetchQuery('todos', fn, { staleTime: 5000 }) and the data is older than the specified staleTime, the query will be fetched
 If no instances of useQuery appear for a prefetched query, it will be deleted and garbage collected after the time specified in cacheTime.
 Manually Priming a Query
 Alternatively, if you already have the data for your query synchronously available, you don't need to prefetch it. You can just use the Query Client's setQueryData method to directly add or update a query's cached result by key.
*/

queryClient.setQueryData('todos', todos)