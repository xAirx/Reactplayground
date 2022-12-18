/* Manual Parallel Queries
When the number of parallel queries does not change, there is no extra effort to use parallel queries.
Just use any number of React Query's useQuery and useInfiniteQuery hooks side-by-side!
 */

function App () {
    // The following queries will execute in parallel
    const usersQuery = useQuery('users', fetchUsers)
    const teamsQuery = useQuery('teams', fetchTeams)
    const projectsQuery = useQuery('projects', fetchProjects)
}