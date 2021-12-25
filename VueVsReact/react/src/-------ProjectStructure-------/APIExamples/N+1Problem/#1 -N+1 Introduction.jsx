/* 10 Insanely Annoying REST API Problems (And How to Solve them with GraphQL)
https://leapgraph.com/what-graphql-solves/

I've spent the last three days painstakingly versioning a broken REST API for a client and I can't help but wonder, what problems does GraphQL solve?

    Introduces proper Data Fetching
    Solves Overfetching / Underfetching
    Reduces waste of Network Requests
    Brings Flexibility to the Static Nature of APIs
    Makes Resource Deprecations Easy
    Makes Evolution and Versioning Easy
    Introduces Schema Stitching
    Makes Subscriptions Easy
    Boosts Performance
    Makes Querying easy with a Language

To solve each of these REST API problems with GraphQL, we need to understand them first. Consider the following example.

Suppose, in a blog application, you wanted to find an author, list all the posts by that author and list the followers of that author:

How would you go about this ? */

/* The RESTful Approach

Although REST famously utilizes a uniform protocol (usually HTTP) for its interface, it is in fact protocol agnostic.

It does not define it's own spec, is not a query language and does not care what protocol you use.

REST aims to completely decouple clients and APIs, read hypermedia controls.

It is stateless, static and accomodates evolution grudgingly.

In the example above, a standard RESTful approach would expose the data with three different API endpoints as follows.


/authors/:id
/authors/:id/posts
/authors/:id/followers



Let's go over each of them. */

/*
Endpoint #1: Fetching the Author

Retrieving an author using the :id params in REST would typically yield all the author data as follows.


{
  "author": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Solo",
    "address": "{ ... }",
    "birthday": "August 29, 1995",
    ...
  }
}



If the client only needed the author name, we can then assign the JSON Object to a variable, say author,
and then use get the name with author.name. */

/* Endpoint #2:

Fetching the Author's Posts

Hitting the second endpoint to get the author's posts from the API returns a list of all the posts with the fields as follows.


{
  "posts": [{
    "_id": "",
    "title": "Start Learning GraphQL Today",
    "content": "...",
    "comments": { ... }
  }, {
    "_id": "",
    "title": "Relay vs Apollo: GraphQL Clients",
    "content": "...",
    "comments": { ... }
  }, {
    "_id": "",
    "title": "Why GraphQL is Killing REST",
    "content": "...",
    "comments": { ... },
  }, {
    ...
  }]
}



Because we only need the post titles, we can again assign a variable posts, and
the iterate through the posts assigning another variable post.name on each of the titles.
 */

/* Endpoint #3:

Fetching the Author's Followers

Hitting the third API endpoint for the author's followers returns a list with all the followers of that author with their complete data.

Again, to drop the unnecessary data, we can assign a variable followers, to the JSON Object and retrieve the name with dot notation.


{
  "followers": [{
    "_id": "507f1f77bcf86cd799439011",
    "name": "John",
    "address": "{ ... }",
    "birthday": "March 05, 1970"
  }, {
    "_id": "507f191e810c19729de860e3",
    "name": "Alice",
    "address": "{ ... }",
    "birthday": "May 14, 1986"
  }, {
    "_id": "507f110c19729de8de86065l",
    "name": "Sarah",
    "address": "{ ... }",
    "birthday": "November 23, 1991"
  }, {
    "_id": "507f1f77bcf8610c19729de8",
    "name": "Nolan",
    "address": "{ ... }",
    "birthday": "June 15, 1984"
  }, {
    ...
  }]
}
 */

/*
So, what's the problem with this approach.

Well...

Let's see.

 */
