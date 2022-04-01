/*

Short answer: props are passed by reference.

The reason it can be confusing: if you change the parent's state by hand (bad practice!), the object will change in the child component, too. But won't trigger re-render! (The child component won't "know" that its props has changed.) So you won't see the UI change.

However if you change the parent's state with setState (the preferred practice), the child will be notified, that it must re-render itself.
 */

// The reason its relevant to remember that props are passed by reference
// is when you use useMemo and useCallback. as well as combining it with useEffect.
// When the component re-renders a new object is created, with a new reference.
// This means that if we want to watch for prop changes with useEffect,
// we need to combine it with a useMemo
// This way we can make sure that we have the reference to the old object, IF the props has not changed.
// this means we can make sure that the prop in the dependency array of UseEffect is the same reference.

// So if you change the object (props change) we will have a new reference
// Usememo will update and the updated new reference is used in the useEffect.
// And the new object will be used in the next render.
