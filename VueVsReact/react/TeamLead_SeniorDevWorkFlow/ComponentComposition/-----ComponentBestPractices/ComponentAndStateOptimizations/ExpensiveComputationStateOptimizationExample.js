/* Component and state optimizations
Do not put everything in a single state.That might trigger unnecessary re - renders.Instead split the global state into multiple stores according to where it is being used.

Keep the state as close as possible to where it is being used.This will prevent re - rendering components that do not depend on the updated state.

If you have a piece of state that is initialized by an expensive computation, use the state initializer function instead of executing it directly because the expensive function will
be run only once as it is supposed to.e.g:
 */

// instead of this which would be executed on every re-render:
const [state, setState] = React.useState(myExpensiveFn());

// prefer this which is executed only once:
const [state, setState] = React.useState(() => myExpensiveFn());