/* Use ternaries instead of && in JSX

Let's say we are displaying a list of posts in a dedicated component, PostList.

It makes sense to check whether we have posts before we iterate over them.

Since our posts list is an array, we can use the .length property to check and see if it is a truthy value (greater than 0). If so, we can map over that array with our JSX.

We can express all this with the and && operator: */

export default function PostList({ posts }) {
  return (
    <div>
      <ul>
        {posts.length &&
          posts.map((post) => <PostItem key={post.id} post={post} />)}
      </ul>
    </div>
  );
}

/* However, you might be surprised with what we see, if we were to execute such code. If our array is empty, we don't see nothing – we see the number 0!

What? Why is this?!

This is a JavaScript-related problem, because the length of our array is 0. Because 0 is a falsy value, the && operator doesn't look at the right hand side of the expression. It just returns the left hand side – 0.

What is the best way to fix this and to prevent such errors in the future?

In many cases we shouldn't use the and operator, but instead use a ternary to explicitly define what will be displayed in the event that condition is not met.

If we were to write the following code with a ternary, we would include the value null in the else condition to ensure that nothing is displayed.
 */
export default function PostList({ posts }) {
  return (
    <div>
      <ul>
        {posts.length
          ? posts.map((post) => <PostItem key={post.id} post={post} />)
          : null}
      </ul>
    </div>
  );
}

By using ternaries instead of &&, you can avoid many annoying bugs like this one.