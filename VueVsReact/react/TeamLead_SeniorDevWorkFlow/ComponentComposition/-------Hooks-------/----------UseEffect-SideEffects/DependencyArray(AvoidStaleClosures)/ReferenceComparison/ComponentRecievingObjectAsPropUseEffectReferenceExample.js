
https://betterprogramming.pub/how-to-use-the-react-hook-usedeepeffect-815818c0ad9d

/* A really common situation when working with React Hooks is that we need to enhance their basic functionality to fit a requirement imposed by the component behaviour, even
if the native Hook implementations are really useful and cover the most of what we need.The Hooks provided by
React can be combined to create custom Hooks to support complex cases.
The Problem

Let’s say we have a component that receives an object as a prop, and we want to run an effect every time one of the properties in this object changes.
We can write some basic code to get a better idea:
 */


const Parent = () => {
    const [obj, setObj] = useState({
        name: 'John',
        age: 30
    });

    const handleChangeName = () => {
        setObj({
            ...obj,
            name: 'Dave'
        });
    }

    useEffect(() => {
        console.log('obj changed', obj.name);
    }, [obj]);
    return (
        <div>
            <button onClick={handleChangeName}>
                Click me
            </button>
            <Child obj={obj} />
        </div>
    );
}




/* At this point, we pass some data into an object and a count value to the child component, and it should run the effect
only when one of the values firstName or lastName changes, right ? Nope!

The useEffect Hook doesn’t perform a shallow comparison on objects, but it checks whether its reference changes or not.
If we take a better look at the code above, you’ll see that Parent always creates a new object when passing the props, so every
time the count variable changes and the child component gets re - rendered, the effect will run even if there’s not a real change in the values of the data property.

We need a way to run the effect only in the case that the content of our object changes — something that checks the object properties.
The Solution

Based on the requirement, we need a special Hook that checks if any of the passed dependencies has changed its content.
We can write the useDeepEffect Hook, and then I’ll comment on its implementation.

The useDeepEffect Hook implementation

To implement this custom Hook, we are using the Lodash function isEqual, which will help us to deeply compare two passed elements if they are of the object type.
    Let’s recap how it works: */

https://github.com/ikoichi/use-deep-effect

const Child = ({ obj }) => {

    // This will not work since arrays and objects are compared by reference.
    // we need to deeply compare and not shallow compare in this situation.

    useDeepEffect(() => {
        console.log('obj changed', obj.name);
    }, [obj]);


    return (
        <div>
            <p>Name: {obj.name}</p>
            <p>Age: {obj.age}</p>
        </div>
    );
}

/* Declare an isFirst reference using the useRef Hook to keep track of the status of the effect.
We need this later to check if it is the first time it should run.We do the same with the prevDeps ref
to always have a reference to the previous dependencies the Hook should review.

Using the Array.propotype.every method, iterate over the current dependencies array and compare each one of them with the previous value.
Store the result in a variable to identify if anything has changed.

It’s time to decide if we should run the effect function or not.
It should run only if it’s the first time or if the isSame variable is false, meaning something has changed from the previous dependencies.
In the end, we should ensure it’s not the first time the Hook runs.We also have to update the prevDeps reference with the last dependencies we just used for the comparison. */