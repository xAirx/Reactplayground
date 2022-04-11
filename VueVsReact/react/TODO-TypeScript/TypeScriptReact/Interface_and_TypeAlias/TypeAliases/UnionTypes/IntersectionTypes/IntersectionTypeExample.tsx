////// types are more alike to interfaces than ever now.

////// we are getting the error that we havent implemented hungry.

type Person2 = {
  name: string;
  hungry: boolean;
};
const harry: Person2 = {
  name: "Harry", // hungry is missing in type
};

/////////////////////////////////////////////////////////////////////
/* Types cant extend other types.
    If you want to merge two types you will use unions or intersections */
//////////////////////////////////////////

/////// intersection ///////
type Person4 = {
  name: string;
  hungry: boolean;
} & { youtuber: boolean };
const harry3: Person4 = {
  name: "Harry", // hungry is missing in type
  hungry: true,
  /// Youtuber is not implemented
};

type Person5 = {
  name: string;
  hungry: boolean;
} & { youtuber: boolean };
const harry4: Person4 = {
  name: "Harry", // hungry is missing in type
  hungry: true,
  youtuber: true,
};

/* Intersection Types (Multiple values into one)

An intersection type is a way of combining multiple types into one. Meaning that you can merge a given type A with a type B or more and get back a single type with all properties.
 */

type LeftType = {
  id: number;
  left: string;
};

type RightType = {
  id: number;
  right: string;
};

type IntersectionType = LeftType & RightType;

function showType(args: IntersectionType) {
  console.log(args);
}

showType({ id: 1, left: "test", right: "test" });
// Output: {id: 1, left: "test", right: "test"}

/* Intersection Types

Intersection types are closely related to union types, but they are used very differently.

An intersection type combines multiple types into one.

This allows you to add together existing types to get a single type that has all the features you need.

For example, Person & Serializable & Loggable is a type which is all of Person and Serializable and Loggable. That means an object of this type will have all members of all three types.

For example, if you had networking requests with consistent error handling then you could separate out the error handling into it’s own type which is merged with types which correspond to a single response type.
 */

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}
interface ArtworksData {
  artworks: { title: string }[];
}
interface ArtistsData {
  artists: { name: string }[];
}
// These interfaces are composed to have
// consistent error handling, and their own data.
type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;
const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  console.log(response.artists);
};
