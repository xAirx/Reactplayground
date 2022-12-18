Keep server and client state separate
This goes hand in hand with putting - props - to - use - state, an article I have written last month: If you get data from useQuery, try not to put that data into local state.The main reason is that you implicitly opt out of all background updates that React Query does for you, because the state "copy" will not update with it.

This is fine if you want to e.g.fetch some default values for a Form, and render your Form once you have data.Background updates are very unlikely to yield something new, and even if, your Form has already been initialized.So if you do that on purpose, make sure to not fire off unnecessary background refetches by setting staleTime:

initial - form - data
Copyinitial - form - data: copy code to clipboard
const App = () => {
    const { data } = useQuery('key', queryFn, { staleTime: Infinity })

    return data ? <MyForm initialData={data} /> : null
}

const MyForm = ({ initialData }) => {
    const [data, setData] = React.useState(initialData)
  ...
}
This concept will be a bit harder to follow through when you display data that you also want to allow the user to edit, but it has many advantages.I have prepared a little codesandbox example:


The important part of this demo is that we never put the value that we get from React Query into local state.This makes sure that we always see the latest data, because there is no local "copy" of it.

The enabled option is very powerful
The useQuery hook has many options that you can pass in to customize its behaviour, and the enabled option is a very powerful one that enables you to do many cool things(pun intended).Here is a short list of things that we were able to accomplish thanks to this option:

Dependent Queries
Fetch data in one query and have a second query only run once we have successfully obtained data from the first query.
Turn queries on and off
We have one query that polls data regularly thanks to refetchInterval, but we can temporarily pause it if a Modal is open to avoid updates in the back of the screen.
Wait for user input
Have some filter criteria in the query key, but disable it for as long as the user has not applied their filters.
Disable a query after some user input
e.g.if we then have a draft value that should take precedence over the server data.See the above example.