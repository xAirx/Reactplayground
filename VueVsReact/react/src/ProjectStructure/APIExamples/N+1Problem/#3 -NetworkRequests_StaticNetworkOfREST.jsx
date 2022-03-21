/*
Problem #3: Network Request
https://leapgraph.com/what-graphql-solves/

As illustrated above, you are almost guaranteed to fetch more or less data than you need.

This leads to huge waste when scaling REST APIs because each endpoint has a fixed data structure.

The above example required three different requests to the server, only to transfer a significant amount of resources that were just ignored by the client.


This REST implementation represents a huge waste bandwidth per request and ,ideally, a lot more requests than necessary.

It get slower and slower for large datasets, massively increasing latency.




Problem #4: Static Nature of REST

The solution to these three problems above usually boils down to two things;

designing your API as closely as possible to how the client will request the data and versioning the API when the data changes.

And modern APIs change a lot.

You could ofcourse design your API in such a way that it exposes the data in a more efficient way.


Which will likely be a temporary fix, until the data changes.

REST APIs are static, data is stored is a certain way, retrieved in a certain way. Changing things is painful. Period.

To retrieve new data from the API, you need a new endpoint, which you can just add.

If its new data you want from an old API, say additional fields not previously included for a Post with defined endpoints, you have to bump the version.

API Evolution as it were.
 */
