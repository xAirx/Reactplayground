/* NonNullable
NonNullable<T> will take a type and remove null and undefined from the allowed types.
This can be useful for instances where a type may allow for nullable values farther up a chain, but later functions have been guarded and cannot be called
with null. For example an application may have the concept of a nullable user at the top level of the application. Here we should be guarding against null values.
 We may have several internal functions that always expect a user to be present. We could use a higher order function to
 address the null guard before calling these functions. In that case, we no longer need the null branch for these internal functions and
 can remove them with NonNullable.
 */
interface UserBase {
  email: string;
  image: string | null;
  username: string;
}

// NullableUserBase can be a UserBase or null
type NullableUserBase = UserBase | null;

const missingUser: NullableUserBase = null;

// This will throw a compilation error as null has been removed
const requiredUser: NonNullable<NullableUserBase> = null;

/* It is important to note that this utility is not recursive.
In the case of our user example, image can still be null. If we wanted to change the type of image to disallow null,
we would need to extend the base type and override specific properties. */

interface UserBase {
  email: string;
  image: string | null;
  username: string;
}

interface RequiredImage extends UserBase {
  image: NonNullable<UserBase["image"]>;
}

const user: RequiredImage = {
  email: "hello@example.com",
  image: "my/image/url",
  username: "sampleuser",
};
