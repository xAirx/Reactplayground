/* The pattern itself is pretty simple. Here's the part that's the pattern: */

const callbackRef = React.useRef(callback);
React.useLayoutEffect(() => {
  callbackRef.current = callback;
});

/* Curious about useLayoutEffect?

    That's it. That's the pattern.

 */

/* So why would you want to do this ? Well, let's think about when you use useRef. You use useRef whenever you want to keep track of a value,

but not trigger a re - render when you update it.



So in our case, we're trying to keep track of callback. The reason for this, is we want to make sure that

we're always calling the latest version of the callback rather than one from an old render.



But why don't we use useState instead? Could we keep track of this latest callback value in an actual state value?

We don't want to use useState because we don't need to trigger a component re - render when we update to the latest value.

In fact, in our case if we tried, we'd trigger an infinite loop (go ahead, try it 😈).



And because we don't need or want a re-render when we update the callback to the latest value, it means we also don't need to

(and really shouldn't) include it in a dependency array for useEffect, useCallback, or in our case useMemo. This is an important point, so I want to dive into it a bit.

It's really important that you follow the eslint-plugin-react-hooks/exhaustive-deps rule and always include all dependencies. But you should skip the current value of a ref. So don't ever do this: */

// ❌ don't ever do this
React.useEffect(() => {}, [ref.current]);

/* This is because updating a ref doesn't trigger a re-render anyway, so React can't call the effect callback or update memoized values when the ref is updated.

So if you include ref.current in the dependency array, you'll get surprising behavior that's difficult to debug.

As a side - note, because the ref itself is a stable object, it doesn't make a difference if you include the ref object itself in your dependency array: */

// 🤷‍♂️ doesn't make a difference whether you include the ref or not.
React.useEffect(() => {}, [ref]);

/* You can run into some serious bugs if you don't include all your non-ref deps though, so just please, don't ignore the linting rule for this. */ ...