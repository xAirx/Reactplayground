/* Placeholder Data as a Function
If the process for accessing a query's placeholder data is intensive or just not something you want to perform on every render, you can memoize the value or pass a memoized function as the placeholderData value:
 */
function Todos () {
    const placeholderData = useMemo(() => generateFakeTodos(), [])
    const result = useQuery('todos', () => fetch('/todos'), { placeholderData })
}
