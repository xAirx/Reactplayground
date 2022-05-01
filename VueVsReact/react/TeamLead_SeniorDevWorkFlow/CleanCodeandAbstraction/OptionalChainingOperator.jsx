/* How to Use the Optional Chaining Operator in JavaScript

In JavaScript, we need to first make sure that an object exists before we can access a property from it.

If the object has a value of undefined or null, it will result in a type error.

In our example here, we have a React application where users can edit posts they have made.

Only if isPostAuthor is true – meaning the authenticated user has the same id as the id of the author of the post – will we show the EditButton component.
 */

export default function EditButton({ post }) {
  const user = useAuthUser();
  const isPostAuthor = post.author.userId !== user && user.userId;

  return isPostAuthor ? <EditButton /> : null;
}

/* The problem with this code is that our user value might have a value of undefined.

This is why we must use the && operator to make sure user is an object before we attempt to get the userId property.

If we were to access an object within an object, we would have to include another && conditional.

This can cause our code to become tedious and hard to understand.

Fortunately, a new JavaScript feature that allows us to check and see if an object exists before accessing a property without using the end conditional is the optional chaining operator.

To make sure an object exists before attempting to access a property off of it, just put a question mark immediately afterwards:
 */

export default function EditButton({ post }) {
  const user = useAuthUser();
  const isPostAuthor = post.author.userId !== user?.userId;

  return isPostAuthor ? <EditButton /> : null;
}

/* This will prevent any type errors and allows us to write much cleaner conditional logic. */