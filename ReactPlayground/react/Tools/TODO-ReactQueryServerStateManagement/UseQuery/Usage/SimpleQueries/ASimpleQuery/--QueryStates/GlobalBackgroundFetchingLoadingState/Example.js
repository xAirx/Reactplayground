/* Displaying Global Background Fetching Loading State
In addition to individual query loading states, if you would like to show a global loading indicator when any queries are fetching (including in the background), you can use the useIsFetching hook:
 */

import { useIsFetching } from 'react-query'

function GlobalLoadingIndicator () {
    const isFetching = useIsFetching()

    return isFetching ? (
        <div>Queries are fetching in the background...</div>
    ) : null
}