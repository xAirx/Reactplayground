/* Exclude
Exclude<T,U> works similarly to Extract but performs the inverse operation.
It will return all of the values present in T that are not present in U.
In our previous example, we can use this to find all of the properties that are unique to UserProfile.
 */
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

type ProfileSpecificKeys = Exclude<keyof UserProfile, keyof UserBase>;
// 'id' | 'isAdmin' | 'reviews'

type ExcludedTypes<T, U> = {
  [K in Exclude<keyof T, keyof U>]: T[K];
};

const user: ExcludedTypes<UserProfile, UserBase> = {
  id: "1234",
  isAdmin: false,
  reviews: [],
};
