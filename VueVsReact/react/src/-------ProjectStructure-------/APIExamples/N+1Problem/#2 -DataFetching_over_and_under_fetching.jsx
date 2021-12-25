/* Problem #1:

/////////////////////Data Fetching/////////////////////
https://leapgraph.com/what-graphql-solves/

Modern Progressive Web apps and Native apps are increasingly data-driven.
This often requires them to fetch and combine related resources from huge datasets with near zero latency.

A common bottleneck with RESTful APIs is the need for multiple roundtrips to multiple endpoints to fetch all required related resources.
To get all the data we needed for the blog above, we had to hit three different API endpoints.

Fetching data in REST APIs usually means hitting an ever increasing endpoints endpoints.
Even if you fetch async, the multiple endpoints typically go up fairly quickly when you scale the application.
*/

/* Problem #2


/////////////////////Overfetching or Underfetching/////////////////////

For the first endpoint, besides getting back the author id and the name, which were the only required fields,

the API sent back the address, the birthday and all the other fields for that author

If there are 100 other fields storing data for the author, the server will

return all these fields every single time this endpoint is hit.

As we saw, these fields were never even required by the client.




In the second endpoint, all the additional data for the posts sent
back i.e. content and a huge listcomments was also never required.


All 100 fields fields each of the followers would again be fetched from the third endpoint.


///////////////////// CONCLUSION ///////////////////////
Each of the three endpoints illustrate perfect examples of overfetching.

There needing to be three endpoints illustrates that underfetching.

Three endpoints had to be hit to fetch all the required data.
 */
