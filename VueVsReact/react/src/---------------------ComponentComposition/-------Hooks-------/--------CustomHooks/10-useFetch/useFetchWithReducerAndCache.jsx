/* Creating useFetch Hook  */
https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/

const useFetch = (url) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setStatus('fetched');
        };

        fetchData();
    }, [url]);

    return { status, data };
};

/* Now, our useFetch hook is generic and we can use it as we want in our various components.

Here’s one way of consuming it:


 */
const [query, setQuery] = useState('');

const url = query && `https://hn.algolia.com/api/v1/search?query=${query}`;
const { status, data } = useFetch(url);


/*
In this case, if the value of query is truthy, we go ahead to set the URL and if it’s not, we’re fine with passing undefined as it’d get handled in our hook.

The effect will attempt to run once, regardless.

Memoizing Fetched Data #

Memoization is a technique we would use to make sure that we don’t hit the hackernews endpoint if

we have made some kind of request to fetch it at some initial phase.

Storing the result of expensive fetch calls will save the users some load time, therefore, increasing overall performance.

Note: For more context, you could check out Wikipedia’s explanation on Memoization.

Let’s explore how we could do that! */



const cache = {};

const useFetch = (url) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setStatus('fetching');
            if (cache[url]) {
                const data = cache[url];
                setData(data);
                setStatus('fetched');
            } else {
                const response = await fetch(url);
                const data = await response.json();
                cache[url] = data; // set response in cache;
                setData(data);
                setStatus('fetched');
            }
        };

        fetchData();
    }, [url]);

    return { status, data };
};
/*
Here, we’re mapping URLs to their data.


    So, if we make a request to fetch some existing data, we set the data from our local cache, else, we go ahead to make the request and set the result in the cache.

    This ensures we do not make an API call when we have the data available to us locally.

    We’ll also notice that we’re killing off the effect if the URL is falsy, so it makes sure we don’t proceed to fetch data that doesn’t exist.

    We can’t do it before the useEffect hook as that will go against one of the rules of hooks, which is to always call hooks at the top level.



/////////////////////////////// CACHE

Declaring cache in a different scope works but it makes our hook go against the principle of a pure function.

Besides, we also want to make sure that React helps in cleaning up our mess when we no longer want to make use of the component.

We’ll explore useRef to help us in achieving that. */



///////////////////////////////Memoizing Data With useRef #
/*
    “useRef is like a box that can hold a mutable value in its .current property.”

    — React Docs

With useRef, we can set and retrieve mutable values at ease and its value persists throughout the component’s lifecycle.

Let’s replace our cache implementation with some useRef magic! */

const useFetch = (url) => {
    const cache = useRef({});
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus('fetching');
            if (cache.current[url]) {
                const data = cache.current[url];
                setData(data);
                setStatus('fetched');
            } else {
                const response = await fetch(url);
                const data = await response.json();
                cache.current[url] = data; // set response in cache;
                setData(data);
                setStatus('fetched');
            }
        };

        fetchData();
    }, [url]);

    return { status, data };
};

/* Here, our cache is now in our useFetch hook with an empty object as an initial value.










///////////////////////////////Wrapping Up #

Well, I did state that setting the data before setting the fetched status was a good idea, but there are two potential problems we could have with that, too:

    Our unit test could fail as a result of the data array not being empty while we’re in the fetching state.
    React could actually batch state changes but it can’t do that if it’s triggered asynchronously;
    Our app re-renders more than it should.

Let’s do a final clean-up to our useFetch hook.,We’re going to start by switching our useStates to a useReducer.

Let’s see how that works! */

const initialState = {
    status: 'idle',
    error: null,
    data: [],
};

const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case 'FETCHING':
            return { ...initialState, status: 'fetching' };
        case 'FETCHED':
            return { ...initialState, status: 'fetched', data: action.payload };
        case 'FETCH_ERROR':
            return { ...initialState, status: 'error', error: action.payload };
        default:
            return state;
    }
}, initialState);




/* Here, we added an initial state which is the initial value we passed to each of our individual useStates.

In our useReducer, we check what type of action we want to perform, and set the appropriate values to state based on that.

This resolves the two problems we discussed earlier, as we now get to set the status and data at the same time in order to help prevent impossible states and unnecessary re-renders.

 */







/////////////////////////////// CLEANUP sideEFFECT.

/* There’s just one more thing left: cleaning up our side effect.
Fetch implements the Promise API, in the sense that it could be resolved or rejected.
If our hook tries to make an update while the component has unmounted because of some Promise just got resolved,
React would return Can't perform a React state update on an unmounted component.
Let’s see how we can fix that with useEffect clean-up! */

useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
        dispatch({ type: 'FETCHING' });
        if (cache.current[url]) {
            const data = cache.current[url];
            dispatch({ type: 'FETCHED', payload: data });
        } else {
            try {
                const response = await fetch(url);
                const data = await response.json();
                cache.current[url] = data;
                if (cancelRequest) return;
                dispatch({ type: 'FETCHED', payload: data });
            } catch (error) {
                if (cancelRequest) return;
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        }
    };

    fetchData();

    return function cleanup() {
        cancelRequest = true;
    };
}, [url]);

Here, we set cancelRequest to true after having defined it inside the effect.

So, before we attempt to make state changes, we first confirm if the component has been unmounted.
If it has been unmounted, we skip updating the state and if it hasn’t been unmounted, we update the state.
This will resolve the React state update error, and also prevent race conditions in our components.



///////////////////////////////Conclusion #

We’ve explored several hooks concepts to help fetch and cache data in our components. We also went through cleaning up our useEffect hook which helps prevent a good number of problems in our app.

If you have any questions, please feel free to drop them in the comments section below!