import { useQuery } from 'react-query'

// Make a specific query retry a certain number of times
const result = useQuery(['todos', 1], fetchTodoListPage, {
    retry: 10, // Will retry failed requests 10 times before displaying an error
})
