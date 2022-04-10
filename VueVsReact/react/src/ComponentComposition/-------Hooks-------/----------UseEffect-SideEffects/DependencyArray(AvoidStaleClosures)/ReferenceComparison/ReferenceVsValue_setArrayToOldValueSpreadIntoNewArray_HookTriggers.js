/* Reference vs value in useEffect Hook

Photo by Fabian Gieske on Unsplash
This week I was working near a colleague and overheard them swearing at their screen.

In a helpful moment I wandered over and wasn’t surprised to find the problem was hooks.

In this case the developer was struggling with the useEffect hook, specifically, in their words, where
the “ ****ing thing won’t trigger! ”. It was the same problem I’d hit when first playing with hooks and so
 it inspired me to write a blog post.

Let’s briefly (because this has been done before) discuss how useEffect works: */

useEffect(() => {
    // do something funky
});

/* By using this hook in your function component, whatever the funky thing you tell it to do will be done each time
the component renders.
 */

useEffect(() => {
    // do something funky only on first render
}, []);

/* You can also add an optional dependency array to the useEffect function.
As in the above example, this can be an empty array indicating you only want the effect to run on the initial render.
 Ideal for something like an initial data load. */


useEffect(() => {
    // do something funky only when the count updates
}, [count]);

/* Finally, you can pass a variable to the dependency array.
This causes useEffect to watch the value of the variable and update only when it changes.
In practice this is the variant I use the most as normally want to perform an action when something in my application changes.
It was with this example that my colleague was struggling.
Take this simplified example component: */

import React, { useState, useEffect } from 'react';

const App = () => {

    const [name, setName] = useState('');
    const [array, setArray] = useState([{ 'name': 'Jon', 'age': 20 }, { 'name': 'Jill', 'age': 40 }]);

    useEffect(() => {
        console.log(name);
        console.log('name updated');
    }, [name]);

    useEffect(() => {
        console.log(array);
        console.log('array updated');
    }, [array]);

    const changeName = () => {
        setName('Dave');
    }

    const changeArray = () => {
        array[1] = { 'name': 'Jill', 'age': 60 };
        setArray(array);
    }

    return (
        <div>
            <button onClick={() => changeName()}>
                Change Name
            </button>
            <button onClick={() => changeArray()}>
                Change Array
            </button>
        </div>
    )
}

export default App;


/* Here we have a function component.
It has two state variables using the setState hook: name - a string (value type) and array — an array (reference type).
 */

const [name, setName] = useState('');
const [array, setArray] = useState([
    { 'name': 'Jon', 'age': 20 },
    { 'name': 'Jill', 'age': 40 }
]);

/* It also has two useEffect hooks, one setup to trigger on a change in name, and the other on a change in array:
 */

useEffect(() => {
    console.log(name);
    console.log('name updated');
}, [name]);

useEffect(() => {
    console.log(array);
    console.log('array updated');
}, [array]);

/* When triggered, these hooks simply log out the value they are watching and a message to say it was updated.
 */

const changeName = () => {
    setName('Dave');
}
const changeArray = () => {
    array[1] = { 'name': 'Jill', 'age': 60 };
    setArray(array);
}

return (
    <div>
        <button onClick={() => changeName()}>
            Change Name
        </button>
        <button onClick={() => changeArray()}>
            Change Array
        </button>
    </div>
)
}


/* Finally, we have two functions assigned to the onClick of two buttons, allowing us to manually update both name and array.
If we click the first button, we see the following in the console: */

/* >Dave
>name updated

All fine there.
But if we click the second button, the console remains blank. The hook hasn’t been triggered.
Does this mean our array update has failed? We can modify the first hook to show us:
 */

useEffect(() => {
    console.log(name);
    console.log(array);
    console.log('name updated');
}, [name]);


/* So now we click the second button, to update the array, then the first and the console shows this:

>Dave
>(2) [{…}, {…}]
>0: {name: “Jon”, age: 20}
>1: {name: “Jill”, age: 60}
>__proto__
>name updated */

/*
We can see Jill’s age has been updated. So why does the useEffect hook not fire?

The problem is that the useEffect hook doesn’t perform a comparison on objects or arrays, it simply checks whether the reference changes or not. As objects and arrays are reference types, the hook won’t fire when one of their values changes.

The solution is very simple. We have to change our setArray call from: */

setArray(array);

to:

setArray([...array]);

/* By setting the array to the old value spread into a new array, the reference changes to the new version and the hook triggers.

That’s it! I can’t tell you how many hours I lost to that first time around! */