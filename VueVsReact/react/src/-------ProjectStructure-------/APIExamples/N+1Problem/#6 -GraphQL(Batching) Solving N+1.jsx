/*
Solving the N+1 Problem for GraphQL through Batching
https://shopify.engineering/solving-the-n-1-problem-for-graphql-through-batching

When Shopify merchants build their businesses on our platform, they trust that we’ll provide them with a seamless experience.

A huge part of that is creating scalable back - end solutions that allow us to manage the millions of requests

reaching our servers each day.


When a storefront app makes a request to our servers, they’re interacting with the Storefront API.Historically,

REST is the language of choice when designing APIs, but Shopify uses GraphQL.


GraphQL is an increasingly popular query language in the developer community, because it avoids the classic over - fetching problem associated with REST.

In REST, the endpoint determines the type and amount of data returned.


GraphQL, however, permits highly specific client - side queries that return only the data requested.

Over - fetching occurs when the server returns more data than needed.REST is especially prone to it, due to its endpoint design.

Conversely, if a particular endpoint does not yield enough information(under - fetching), clients need to make additional queries to

reach nested data.Both over - fetching and under - fetching waste valuable computing power and bandwidth.

 */

////////////////////////////////////// REST EXAMPLE //////////////////////////////////////

/* In this REST example, the client requests all ‘authors’, and receives a response, including fields for name, id, number of publications, and country. The client may not have originally wanted all that information; the server has over-fetched the data.

REST Query and Response
   GET /authors.json

   {
     "authors": [{
         "name": "Adam",
         "id": 1,
         "number_of_publications": 100,
         "country": "Canada",
     }, {
         "name": "Jane",
         "id": 2,
         "number_of_publications": 56,
         "country": "Canada",
         ...
     }]
   }

 */

////////////////////////////////////// GRAPHQL EXAMPLE //////////////////////////////////////
/*
Conversely, in this GraphQL version, the client makes a query specifically for all authors’ names,
and receives that only that information in the response.

GraphQL Query
   query {
     authors {
       name
     }
   }

GraphQL Response
   {
     "authors": [{
       "name": "Adam"
     }, {
       "name": "Jane"
     }]
   }



GraphQL queries are made to a single endpoint, as opposed to multiple endpoints in REST.

Because of this, clients need to know how to structure their requests to reach the data,
rather than simply targeting endpoints.
 */

////////////////////////////////////// SCHEMAS (Describing data) //////////////////////////////////////

/*
GraphQL back - end developers share this information by creating schemas.
Schemas are like maps; they describe all the data and their relationships within a server.

A schema for the above example might look as follows.
   type author {
     name: String!
     id: ID!
   }


The schema defines the type ‘author’, for which two fields of information are available; name and id.

The schema indicates that for each author, there’s a non - nullable string value for the ‘name’ field, and a unique,

non - nullable identifier for the ‘id’ field.For more information, visit the schema section on the official GraphQL website.

How does GraphQL return data to those fields ? It uses resolvers.
 */

////////////////////////////////////// RESOLVER  ( Returning data ) //////////////////////////////////////

/* A resolver is a field - specific function that hunts for the requested data in the server.

The server processes the query and the resolvers return data for each field, until it has fetched all the data in the query.

Data is returned in the same format and order as the query, in a JSON file.


GraphQL’s major benefits are its straightforwardness and ease of use.

Its solved our biggest problems by reducing the bandwidth used and latency while retrieving data for our apps.

As great as GraphQL is, it’s prone to encountering an issue, known as the n + 1 problem.

The n + 1 problem arises because GraphQL executes a separate resolver function for every field, whereas REST has one resolver per endpoint.

These additional resolvers mean that GraphQL runs the risk of making additional round trips

to the database than are necessary for requests.


    query {
     authors {                  # fetches authors (1 query)
       name
       address {                # fetches address for each author (N queries for N authors)
         country
       }
     }
   }                            # Therefore = N+1 round trips */

////////////////////////////////////// N+1 and GraphQL //////////////////////////////////////

/* The n + 1 problem means that the server executes multiple unnecessary round trips to datastores for nested data.

In the above case, the server makes 1 round trip to a datastore to fetch the authors,

then makes N round trips to a datastore to fetch the address for N authors.For example,

if there were fifty authors, then it would make fifty - one round trips for all the data.



It should be able to fetch all the addresses together in a single round trip, so only two round trips to datastores in total,

regardless of the number of authors.The computing expenditure of these extra round trips are massive when applied to large requests,

like asking for fifty different colours of fifty t - shirts.



The n + 1 problem is further exacerbated in GraphQL, because neither clients nor servers can predict how expensive a

request is until after it’s executed.In REST, costs are predictable because there’s one trip per endpoint requested.


In GraphQL, there’s only one endpoint, and it’s not indicative of the potential size of incoming requests.


At Shopify, where thousands of merchants interact with the Storefront API each day,

we needed a solution that allowed us to minimize the cost of each request.
 */

//////////////////////////////// FB Dataloader Inspiration for GraphQL //////////////////////////////////

/* Facebook previously introduced a solution to the N + 1 issue by creating DataLoader, a library that batches requests specifically

for JavaScript. Dylan Thacker - Smith, a developer at Shopify, used DataLoader as inspiration and built the GraphQL

 */

////////////////////////////// Graphql Batching //////////////////////////////////

/*
For GraphQL, a promise represents the eventual, rather than immediate, resolution of a field.

Therefore, instead of resolver functions executing immediately, the server waits before returning the data.

GraphQL Batch allows applications to define batch loaders that specify how to group and load similar data.


The field resolvers can use one of the loaders to load data, which is grouped with similar loads,

and returns a promise for the result.


The GraphQL request executes by first trying to resolve all the fields,which may be resolved with promises.


GraphQL Batch iterates through the grouped loads, uses their corresponding

batch loader to load all the promises together, and replaces the promises with the loaded result


When an object field loads, fields nested on those objects resolve using their field resolvers

(which may themselves use batch loaders), and then they’re grouped with similar loads that haven't executed

         */
