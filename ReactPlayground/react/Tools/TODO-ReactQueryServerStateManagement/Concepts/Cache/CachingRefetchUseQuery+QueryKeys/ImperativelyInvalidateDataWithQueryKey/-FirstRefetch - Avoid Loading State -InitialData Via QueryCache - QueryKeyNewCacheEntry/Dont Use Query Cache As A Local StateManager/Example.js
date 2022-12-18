/* Don't use the queryCache as a local state manager
If you tamper with the queryCache(queryCache.setData), it should only be for optimistic updates or for writing data that you receive from the backend after a mutation.
Remember that every background refetch might override that data, so use something else for local state. */