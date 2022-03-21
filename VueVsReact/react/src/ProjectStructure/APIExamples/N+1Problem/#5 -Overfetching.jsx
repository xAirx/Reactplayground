/*
What Problem does GraphQL Solve ?
https://leapgraph.com/what-graphql-solves/

GraphQL requests hits a single endpoint.

This two problems with rest are the what GraphQL solves, and it solves them brilliantly.

Let me illustrate this.

A typical solution for the above problem with GraphQL would hit the following endpoint:
*/

/* /graphql

Easy!

With the following graph query.


query {
  author(id: "507f1f77bcf86cd799439011") {
    name
    posts {
      title
    }
    followers(last: 3) {
      name
    }
  }
}







Unlike REST which fetched resources with a HTTP GET, this is a POST request that tacks all the data requirements of the client in one.

And you would get back...
 */

/*
{
  "data": {
    "Author": {
      "name": "Solo",
      "posts": [
        { title: "Start Learning GraphQL Today" },
        { title: "Relay vs Apollo: GraphQL Clients" },
        { title: "Why GraphQL is Killing REST" }
      ],
      "followers": [
        { name: "John" },
        { name: "Alice" },
        { name: "Sarah" },
        { name: "Nolan" }
      ]
    }
  }
}


The root field in this JSON Object is data.

The rest ONLY what requested in the graph query

Nothing else.

 */

/*
What Problems does GraphQL Create?


- GraphQL is not a magic pill that solves everything.
- It does not actually create problems, so much as it removes the best parts of REST.
- Caching





What GraphQL Doesn't Solve

- There is what neither REST nor GraphQL can touch.
- Technical Debt
- Post author avatar */
