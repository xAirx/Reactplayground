/* When GraphQL and especially Apollo Client became popular in ca. 2018, there was a lot of fuss about it completely replacing redux,
and the question Is Redux dead yet ? has been asked a lot.

I distinctly remember not understanding what this was all about.

Why would some data fetching library replace your global state manager ?

What does one even have to do with the other ?

I was under the impression that GraphQL clients like Apollo would only fetch the data for you, similar to what e.g.axios does for REST,
and that you would still obviously need some way of making that data accessible to your application.

I couldn't have been more wrong.

 */






React Query
I have never had the chance to use GraphQL.We have an existing REST API, don't really experience problems with over-fetching, it just works, etc. Clearly, there aren't enough pain points for us to warrant a switch, especially given that you'd also have to adapt the backend, which isn't quite so simple.

Yet I still envied the simplicity of how data fetching can look like on the frontend, including the handling of loading and error states.If only there were something similar in React for REST APIs...

Enter React Query.

Made by the open sourcerer Tanner Linsley in late 2019, React Query takes the good parts of Apollo and brings them to REST.It works with any function that returns a Promise and embraces the stale -while-revalidate caching strategy.The library operates on sane defaults that try to keep your data as fresh as possible while at the same time showing data to the user as early as possible, making it feel near instant at times and thus providing a great UX.On top of that, it is also very flexible and lets you customize various settings for when the defaults are not enough.

This article is not going to be an introduction to React Query though.

I think the docs are great at explaining Guides & Concepts, there are Videos from various Talks that you can watch, and Tanner has a React Query Essentials Course you can take if you want to get familiar with the library.

I want to focus more on some practical tips that go beyond the docs, which might be useful when you are already working with the library.These are things I have picked up over the last couple of months when I was not only actively using the library at work, but also got involved in the React Query community, answering questions on Discord and in GitHub Discussions.

The Defaults explained
I believe the React Query Defaults are very well chosen, but they can catch you off guard from time to time, especially at the beginning.

First of all: React Query does not invoke the queryFn on every re - render, even with the default staleTime of zero.Your app can re - render for various reasons at any time, so fetching every time would be insane!

Always code for re - renders, and a lot of them.I like to call it render resiliency.

— Tanner Linsley

If you see a refetch that you are not expecting, it is likely because you just focused the window and React Query is doing a refetchOnWindowFocus, which is a great feature for production: If the user goes to a different browser tab, and then comes back to your app, a background refetch will be triggered automatically, and data on the screen will be updated if something has changed on the server in the meantime.All of this happens without a loading spinner being shown, and your component will not re - render if the data is the same as you currently have in the cache.

During development, this will probably be triggered more frequently, especially because focusing between the Browser DevTools and your app will also cause a fetch, so be aware of that.

    Secondly, there seems to be a bit of confusion between cacheTime and staleTime, so let me try to clear that up:

StaleTime: The duration until a query transitions from fresh to stale.As long as the query is fresh, data will always be read from the cache only - no network request will happen! If the query is stale(which per default is: instantly), you will still get data from the cache, but a background refetch can happen under certain conditions.
    CacheTime: The duration until inactive queries will be removed from the cache.This defaults to 5 minutes.Queries transition to the inactive state as soon as there are no observers registered, so when all components which use that query have unmounted.
Most of the time, if you want to change one of these settings, it's the staleTime that needs adjusting. I have rarely ever needed to tamper with the cacheTime. There is a good explanation by example in the docs as well.