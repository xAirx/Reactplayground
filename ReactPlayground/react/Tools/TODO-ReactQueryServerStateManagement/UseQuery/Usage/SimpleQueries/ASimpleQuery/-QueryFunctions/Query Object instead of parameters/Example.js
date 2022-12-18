/* Using a Query Object instead of parameters
Anywhere the[queryKey, queryFn, config] signature is supported throughout React Query's API,
you can also use an object to express the same configuration: */

import { useQuery } from 'react-query'

useQuery({
    queryKey: ['todo', 7],
    queryFn: fetchTodo,
    ...config,
})