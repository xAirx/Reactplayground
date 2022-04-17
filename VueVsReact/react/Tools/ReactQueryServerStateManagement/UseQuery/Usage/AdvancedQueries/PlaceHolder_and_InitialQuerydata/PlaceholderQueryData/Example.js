/* What is placeholder data ?
    Placeholder data allows a query to behave as if it already has data, similar to the initialData option, but the data is not persisted to the cache.
    This comes in handy for situations where you have enough partial(or fake) data to render the query successfully while the actual data is fetched in the background.

        Example: An individual blog post query could pull "preview" data from a parent list of blog posts that only include title and a small snippet of the post body.
        You would not want to persist this partial data to the query result of the individual query, but it is useful for showing the content layout as quickly as possible while the actual query finishes to fetch the entire object.

There are a few ways to supply placeholder data for a query to the cache before you need it:

Declaratively:
Provide placeholderData to a query to prepopulate its cache if empty
Imperatively:
Prefetch or fetch the data using queryClient and the placeholderData option
 */