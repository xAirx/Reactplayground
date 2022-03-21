//Dont call hooks inside loops or conditionals.
//Dont call hokos inside nested functions

// Use the hooks in the top level of your component.

// Following this rule you ensure that hooks are called
// In the same order each time a component renders.

// This is what allows react to preserve state of hooks.
// Multiple useState and useEffect calls.
