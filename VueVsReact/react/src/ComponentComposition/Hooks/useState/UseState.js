--------------------------------------------------------------------------------------------------------------------------------

/* What does ReactUseState hook do?

The UseState hook lets you add state to function components

By Calling React.useState inside a function component you create a single piece of state associated with that component.
Every hook starts with the word use, a call to useState that literally lets you "USE STATE" in a function component.
The useState hook is perfect for local component state, and a small - ish amount of it.
For a larger app, or one that you intend to scale up, you’ll probably want to augment useState with some other state management solutions. */

--------------------------------------------------------------------------------------------------------------------------------

/*
 
With just this one line of code, we’ve made this a stateful:
 
const [hidden, setHidden] = useState(true);
Once that’s done, the “read more” / “read less” links just need to call setHidden when they’re clicked.
 
useState returns an array with 2 elements, and we’re using ES6 destructuring to assign names to them.
 
The first element is the current value of the state, and the second element is a state setter function – just call it with a new value, and the state will be set and the component will re-render.
  */
 

--------------------------------------------------------------------------------------------------------------------------------


/* const [hidden, setHidden] = useState(true);

But what is this function doing, really? If it gets called every render (and it does!), how can it retain state? 
 
 
Tricksy Hooks
 
The “magic” here is that React maintains an object behind the scenes for each component, and in this persistent object, there’s an array of “state cells.”
 
When you call useState, React stores that state in the next available cell, and increments the pointer (the array index).
 
Assuming that your hooks are always called in the same order (which they will be, if you’re following the Rules of Hooks),
 
React is able to look up the previous value for that particular useState call. The first call to useState is stored in the first array element, the second call in the second element, and so on.
 
It’s not magic, but it relies on a truth you may not have thought about: React itself is calling your component, so it can set things up beforehand. */
 
 
--------------------------------------------------------------------------------------------------------------------------------
 
 
/* Example: Updating state based on previous state (useState with a number)
 
Let’s look at another example: updating the value of state based on the previous value.
We’ll build a, uh, “step tracker.” Very easy to use. Just like a Fitbit.
 
Every time you take a step, simply click the button. At the end of the day, it will tell you how many steps you took. I’m working on securing my first round of funding as you read this. (update: it is going poorly)
 
 
https://codesandbox.io/s/react-hooks-usestate-step-counter-68vcz
  */
 
 
--------------------------------------------------------------------------------------------------------------------------------
 
 
 
/* Example: useState with an array
 
Remember: state can hold any kind of value.
 
Here is an example with an array of random numbers.
Clicking the button adds a new random number
 
https://codesandbox.io/s/react-hooks-using-an-array-with-usestate-d6dyg
  */
 
--------------------------------------------------------------------------------------------------------------------------------
 
/*  
Example: multiple calls to useState
 
If you want to store multiple values in a function component youv'e got a couple options.
 
Call useState more than once.
 
Shove everything into an object.
 
Theres nothing wrong with calling useState multiple times and in most cases, thats how I store multiple values.
 
Once you get over 4 or 5 useState calls it gets a bit unwieldy but if you are fine with it react is too.
 
Lets look at how you'd call useState a couple times to store a username and password.
 
 
 
https://codesandbox.io/s/react-hooks-multiple-usestate-calls-zjk9p
 
 
You can see it works pretty much the same as calling useState once. Each call creates a new piece of state and a setter for that state, and we store those in variables.
 
When the user types into the inputs, the onChange handler is called. It receives the input event and updates the appropriate piece of state with the new value for the username/password. */
 
--------------------------------------------------------------------------------------------------------------------------------
 
/* useState with an object (multiple values, sorta)
 
Let’s look at an example where state is an object. We’ll create the same login form with 2 fields. Compare both ways and pick your favorite.
 
To store multiple values in useState, you have to put them into a single object, and be careful about how you update the state.
 
https://codesandbox.io/s/react-hooks-usestate-with-an-object-multiple-values-l6rih
  */
 
--------------------------------------------------------------------------------------------------------------------------------

 
/* How do we store multiple values with hooks?
 
If you want to store multiple values in a function component youv'e got a couple options.
 
Call useState more than once.
 
Shove everything into an object.
 
There's nothing wrong with calling useState multiple times and in most cases, thats how I store multiple values.
 
Once you get over 4 or 5 useState calls it gets a bit unwieldy but if you are fine with it react is too. */
 
--------------------------------------------------------------------------------------------------------------------------------

 
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
 
What is the difference between the this.setState vs setItems used with hooks for state management?
 
The state updater (setItems, here) doesn’t “merge” new values with old – it overwrites the state with the new value. This is very different from how this.setState worked in classes!
 
 const updateField = e => {
   setState({
     /* The updateField function is where the real work happens.
      It calls setState and passes an object, but it must be sure to copy
       in the existing state with ...form if it doesn’t want to overwrite it. Try taking out the
     ...form line and see what happens. */
     ...form,
     [e.target.name]: e.target.value
   });
 };
 
/* If we want to use more complex state with React hooks, what is the better solution than using multiple  useState’s ?
 
An Easier Way with useReducer?
If you have a complex state, then storing multiple values in useState can get cumbersome.
The next level up is the useReducer hook which is better suited to managing state with multiple values. Learn about the useReducer hook here.
Beyond useReducer, there’s the Context API and a bunch of third-party state management libraries.
 
  */
 
 
 
 
 
 
 
 
 
 
