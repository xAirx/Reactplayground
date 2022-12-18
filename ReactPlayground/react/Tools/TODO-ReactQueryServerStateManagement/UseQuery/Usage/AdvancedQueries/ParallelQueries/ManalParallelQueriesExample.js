/* Manual Parallel Queries
When the number of parallel queries does not change,
there is no extra effort to use parallel queries.
Just use any number of React Query's useQuery and useInfiniteQuery hooks side-by-side!
 */

function App () {
    // The following queries will execute in parallel
    const usersQuery = useQuery(users, fetchUsers)
    const teamsQuery = useQuery(teams, fetchTeams)
    const projectsQuery = useQuery(projects, fetchProjects)
}

/* When using React Query in suspense mode, this pattern of parallelism does not work,
since the first query would throw a promise internally and would suspend the component before the other queries run.
 To get around this, you'll either need to use the useQueries hook
(which is suggested) or orchestrate your own parallelism with separate components for each useQuery instance(which is lame).
 */