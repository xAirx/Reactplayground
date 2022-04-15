/* Experimental persistor(Link)
https://medium.com/myanlearn-blog/myanlearn-x-react-query-313ccfdae915

In version 3, React Query supports persisting the cache with an experimental feature and after reading the description, we are very excited
about it because of the potential it can bring to our users.

Unfortunately, it only supports localStorage for web and there is no official persistor for React Native yet.

However, fortunately, react query has a very detailed documentation and it mentioned that we only needed to implement
a few functions and we get our own persistor which is very encouraging.So, I read the source code for localStoragePersistor
and implemented those functions in React Native’s asyncStorage.


Then, tested the codes in our app and working pretty good.

----> See here https://github.com/tannerlinsley/react-query/pull/2360

How did we test ?

Easy for RN app.

Just kill the app and restart the app.

With asyncStoragePersistor, the landing page’s loading is almost non - existent.

Please take a look at the above video again.



How about offline ?

Initially, we just the default staleTime for invalidation.

Since we already had the asynStorage, I thought why not bring it next level to use for offline support ?

I turned off the wifi and check the app.

The app gets stuck at loading state.

TkDodo’s clear explanation on staleTime vs cacheTime from https://tkdodo.eu/blog/practical-react-query

Since I am using default staleTime(0), it will try to refresh and get new data upon next visit.

Remember I have no internet ? Hence, the app gets stuck at loading state. 😨

So, we needed to make the following tricks: */


// more on asyncStoragePersistor later
const localStoragePersistor = asyncStoragePersistor({
    asyncStorageKey: 'AsyncStorageReactQuery',
    throttleTime: 1000,
});
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
});
persistQueryClient({
    queryClient,
    persistor: localStoragePersistor,
    maxAge: Infinity,
});


/* So, we are never going to stale the data unless there is internet.

At the top level, we set the staleTime to Infinity.Then in the components, we wrap the invalidation with network monitor(netinfo) to make sure the invalidation is triggered only when internet is available.

Finally, our components have following structure: */

const Component(props) {
    const { data, status, isFetching } = useCustomHook("query_key");

    useEffect(() => {
        if (network.IsAvailable) { // <- pseudo code
            queryClient.invalidateQueries("query_key");
        }
    }, []);
    return (
    // UI using `data` here
    // can show loading spinner using `isFetching`
  );
};

/* 🥳 🥳 We got our app working smoothly without internet.

However, there is a caveat:

The customHook will be called only when the user visited a page.

So, to get offline support for Page A, user needed to visit Page A at least once.

Well, this is not really bad and we are happy with it.
Since our app is not media playing app like Netflix or Sportify, full offline support is not needed.
So far, we are quite happy with the performance and also the DX, we created a PR for createAsyncStorageCreator. */