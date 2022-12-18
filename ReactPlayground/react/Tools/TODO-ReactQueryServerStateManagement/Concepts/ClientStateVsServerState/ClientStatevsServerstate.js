/* We should distinguish between two kind of states, client state & server(or remote) state:

https://stackoverflow.com/questions/68525459/what-is-the-main-difference-between-react-query-and-redux

Client state contains:

    locally created data that has not yet been persisted to the server.
    UI state that handles active routes, selected tabs, spinners,
    pagination controls, and so on.

Server state is everything related to:

data persisted remotely that requires asynchronous APIs for
fetching and updating




When it comes to client state, Redux is a great management tool
for managing application’s state.


On the other side, to manage server state, we can use regular
state management tools but they are not so great at working with
async or server state.

    So, to resolve this, we use React Query.

As described on their documentation, React query is a great tool for:

Caching... (possibly the hardest thing to do in programming)
Deduping multiple requests for the same data into a single request
Updating "out of date" data in the background
Knowing when data is "out of date"
Reflecting updates to data as quickly as possible
Performance optimizations like pagination and lazy loading data
Managing memory and garbage collection of server state
Memoizing query results with structural sharing */