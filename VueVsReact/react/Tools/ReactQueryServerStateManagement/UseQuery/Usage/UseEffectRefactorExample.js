How and Why You Should Use React Query
Simplify data fetching with react - query’s custom hooks.

Image by Rain Carnation from Pixabay
One of the challenges we face when building an application with React is determining a code pattern for fetching data from the server.The most common way to handle data fetching in React is to use the global state as a mechanism to determine the current status of the fetch operation.
Here is an example of fetching data from Star Wars API:
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// regular fetch with axios
function App () {
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);

            try {
                const response = await axios('http://swapi.dev/api/people/1/');

                setData(response.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData()
    }, []);
    return (
        <div className="App">
            <h1>React Query example with Star Wars API</h1>
            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}
export default App;

The code above requires both useState and useEffect hooks and uses three different states to store data and determine whether the application is fetching data or already has an error response from the API.This pattern is repeated over and over again for most of your application data fetching logic.
And that’s not all.The most common problems with data fetching in React includes:
Data is shared across all app instance and can be changed by other people
Data could be “stale” and needs to be refreshed
Handle caching and invalidating data to optimize the request operation
Finally, there is also the problem of having the local state which commonly stores your user’s preferences like theme and sidebar config coupled with the remote state which holds the data fetched from API:
//what global state commonly look like nowadays
const state = {
    theme: "light",
    sidebar: "off",
    followers: [],
    following: [],
    userProfile: {},
    messages: [],
    todos: [],
}
Wouldn’t it be nice if you could separate the local state from the remote state ? And what if you can reduce the amount of boilerplate code you need to write for data fetching ?
    One solution would be to create your own custom hook to handle fetching and handling of data.That’s a completely valid solution.You can also share and manage this hook in a component hub like Bit(Github).This way you’ll have it available for any project you’re working on(it can be as a pure hook but also as part of other reusable “smart components”).

        Example: browsing through shared React components on Bit.dev
Another solution and one that we’ll be exploring here in -depth is React Query.This library will help you to fetch, synchronize, update, and cache your remote data while also reducing the amount of code you need to write by providing you two simple hooks and one utility function.
To get the most out of this article, please download this sample repo that I’ve modified from the author:

React Query Sample App
This small React app will retrieve an array of strings from the API route using axios.You can put a new string into the array by using the provided form.It also has the React Query DevTools opened so you can see the cached data in real - time.
The useQuery hook
The useQuery hook is a function used to register your data fetching code into React Query library.It takes an arbitrary key and an asynchronous function for fetching data and return various values that you can use to inform your users about the current application state.
For example, let’s refactor the Star Wars API example above:
import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
// react-query fetch with axios
function App () {
    const { isLoading, error, data } = useQuery('fetchLuke', () =>
        axios('http://swapi.dev/api/people/1/'))
    return (
        <div className="App">
            <h1>React Query example with star wars API</h1>
            {error && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Retrieving Luke Skywalker Information ...</div>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}
export default App;
Notice how in this code, we aren’t using the regular useState and useEffect hooks.This is because useQuery already has various values that we can use inside the application, such as isLoading, error response, and returned data.
Back to the sample repo, you can see how I fetched the todo list from the api by using the same useQuery function inside /pages/index.js:
const { status, data, error, isFetching } = useQuery('todos', async () => {
    const { data } = await axios.get('/api/data')
    return data
})
The difference here is that I also use isFetching which determines whether the query is currently refecthing data or not.You’ll see why it matters in a moment.For now, let’s learn how you can modify remote data.
The useMutation hook
The useMutation hook is commonly used to create / update / delete remote data.This function takes an asynchronous function to update your data(commonly between POST, PUT OR DELETE request) and returns a mutate function that you can call to trigger the mutation.
    const[mutate] = useMutation(
        text => axios.post('/api/data', { text }),
    )
mutate("Learn about React Query")
You can also put optional functions that will be triggered only when the mutate function returns certain results, such as onSuccess and onError.In the sample repo, you can see that I used the mutate function to post new data into the API when the form is submitted.I also put the text input back to empty when the post request is successful:
const [mutatePostTodo] = useMutation(
    text => axios.post('/api/data', { text }),
    {
        onSuccess: () => {
            // Query Invalidations
            // queryCache.invalidateQueries('todos')
            setText('')
        },
    }
)
But if you try to insert a new text into the demo app, you’ll see that the todo list is not refreshed.In order to tell React Query to refetch the todo list, you need to uncomment the code above setText function: {
    onSuccess: () => {
    // Query Invalidations
    queryCache.invalidateQueries('todos')
setText('')
  },
}
The queryCache.invalidateQueries will invalidate the cache with todo key and make React Query fetch the data again.
The queryCache utility
As you’ve seen in the demo DevTools, React Query will cache the retrieved data under the key todo above, but it will automatically become stale after being fetched unless you configure the staleTime.
queryCache is a utility instance that contains many functions that you can use to further manipulate queries.In the sample, you’ve seen how queryCache.invalidateQueries function is used to make React Query send a new request to fetch the todo list.Here is the full list of available methods in queryCache.
    Conclusion
React Query is a great hook library for managing data requests that completely removes the need to put your remote data inside the global state.You just need to tell the library where you need to fetch your data, and it will handle caching, background updates, and stale data without any extra code or configuration.
React Query also removes the need for useState and useEffect hooks and replace them with a few lines of React Query logic.In the long run, it will definitely help you keep your application maintainable, responsive, and fast.
If you’re interested to learn more, don’t forget to check out the React Query documentation.