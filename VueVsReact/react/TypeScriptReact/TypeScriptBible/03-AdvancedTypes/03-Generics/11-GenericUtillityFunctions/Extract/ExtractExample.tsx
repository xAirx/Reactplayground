/* Extract
Extract<T, U>. is a utility for pulling out values that are shared between the two type arguments it receives.
This can be useful for refining types for other implementations, or to remove types that another implementation may not accept. */

interface UserBase {
  email: string;
  image: string | null;
  username: string;
}

interface UserProfile {
  id: string;
  email: string;
  image: string | null;
  isAdmin: boolean;
  username: string;
  reviews: string[];
}

/*
 * If we want to find the shared keys between these interfaces, we can combine
 * keyof with Extract. keyof will give us a union string of all the keys, and
 * Extract will return the shared values.
 */

type SharedUserKeys = Extract<keyof UserBase, keyof UserProfile>;
// 'email' | 'image' | 'username'

/* By using Extract on the two user interfaces, we have a type of the three shared properties.
 This type can then be used to check that a given argument for a function is one of these keys and not one that is either unknown or not shared.
 If we wanted to transform this back into an object we can combine Extract with our own custom type. */

interface UserBase {
  email: string;
  image: string | null;
  username: string;
}

interface UserProfile {
  id: string;
  email: string;
  image: string | null;
  isAdmin: boolean;
  username: string;
  reviews: string[];
}

/*
 * If we want to find the shared keys between these interfaces, we can combine
 * keyof with Extract. keyof will give us a union string of all the keys, and
 * Extract will return the shared values.
 */

type SharedUserKeys = Extract<keyof UserBase, keyof UserProfile>;
// 'email' | 'image' | 'username'

/*
 * Convert our union string back into an object type with the shared
 * properties and their corresponding value types.
 */
type SharedUserData = {
  [K in SharedUserKeys]: UserProfile[K];
};

const user1: SharedUserData = {
  email: "test@example.com",
  image: null,
  username: "sampleuser",
};

/*
 * Here we can eliminate the SharedUserKeys intermediary step, and return
 * a new object type with the shared properties between two other types
 */
type IntersectingTypes<T, U> = {
  [K in Extract<keyof T, keyof U>]: T[K];
};

const user2: IntersectingTypes<UserBase, UserProfile> = {
  email: "test@example.com",
  image: null,
  username: "sampleuser",
};

/* In both the SharedUserData and IntersectingTypes types, we utilize the [K in OTHER_TYPE] pattern.
This allows us to iterate over a union type, in this case 'email' | 'image' | 'username' and set the key name as the current iterator.
In both cases we set the value for each key by referencing the parent type. This works similar to referencing a value on a JavaScript object with a dynamic key.
 The IntersectingTypes implementation works in the same way, but inlines the usage of Extract that we previously had in a separately declared type.
Here we also create a type with our own generic types, T and U, that will represent our base objects. */
