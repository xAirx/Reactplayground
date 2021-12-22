// Side effects and useEffect

// useEffect lets us perform side effects in function components
// Side effects are where we need to reach into the outside world
// For example fetching data from an API or working with the DOM
// Side effects are actions that can change our component state in an
// unexpected way

// useEffect accepts a callback function called the effect function
// this function runs by default every time there is a re-render
// it runs once our compponent mounts
// this would be the right time to perform a side effect in the component lifecycle

// The depedency Array can handle this in differnet ways
