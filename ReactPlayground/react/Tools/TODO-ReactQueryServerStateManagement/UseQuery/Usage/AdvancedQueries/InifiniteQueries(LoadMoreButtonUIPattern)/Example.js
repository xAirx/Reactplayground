/* Infinite Queries
Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern.React Query supports a useful version of useQuery called useInfiniteQuery for querying these types of lists.

When using useInfiniteQuery, you'll notice a few things are different:

data is now an object containing infinite query data:

data.pages array containing the fetched pages

data.pageParams array containing the page params used to fetch the pages

The fetchNextPage and fetchPreviousPage functions are now available


The getNextPageParam and getPreviousPageParam options are available for both determining if there is more data to load and the information to fetch it.This information is supplied as an additional parameter in the query function (which can optionally be overridden when calling the fetchNextPage or fetchPreviousPage functions)

A hasNextPage boolean is now available and is true if getNextPageParam returns a value other than undefined

A hasPreviousPage boolean is now available and is true if getPreviousPageParam returns a value other than undefined

The isFetchingNextPage and isFetchingPreviousPage booleans are now available to distinguish between a background refresh state and a loading more state

Note: When using options like initialData or select in your query, make sure that when you restructure your data that it still includes data.pages and data.pageParams properties, otherwise your changes will be overwritten by the query in its return !
*/


/* Example
Let's assume we have an API that returns pages of projects 3 at a time based on a cursor index along with a cursor
that can be used to fetch the next group of projects: */

fetch('/api/projects?cursor=0')
// { data: [...], nextCursor: 3}
fetch('/api/projects?cursor=3')
// { data: [...], nextCursor: 6}
fetch('/api/projects?cursor=6')
// { data: [...], nextCursor: 9}
fetch('/api/projects?cursor=9')
// { data: [...] }

/* With this information, we can create a "Load More" UI by:

Waiting for useInfiniteQuery to request the first group of data by default
Returning the information for the next query in getNextPageParam
Calling fetchNextPage function
    Note: It's very important you do not call fetchNextPage with arguments unless you want them
    to override the pageParam data returned from the getNextPageParam function. e.g. Do not do this:
    <button onClick={fetchNextPage} /> as this would send the onClick event to the fetchNextPage function. */

import { useInfiniteQuery } from 'react-query'

function Projects () {
    const fetchProjects = ({ pageParam = 0 }) =>
        fetch('/api/projects?cursor=' + pageParam)

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery('projects', fetchProjects, {
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    })

    return status === 'loading' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) : (
        <>
            {data.pages.map((group, i) => (
                <React.Fragment key={i}>
                    {group.projects.map(project => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </React.Fragment>
            ))}
            <div>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    )
}
