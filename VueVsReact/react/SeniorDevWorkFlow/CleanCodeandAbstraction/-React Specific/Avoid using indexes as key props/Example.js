/* Avoid Using Indexes as Key Props
React uses keys to uniquely identify items in an array.

With keys, React can pinpoint which item has been changed, added, or removed from the array.

Most of the time when rendering arrays, you might use the index as the key. */

const Items = () => {
    const arr = ["item1", "item2", "item3", "item4", "item5"];
    return (
        <>
            {arr.map((elem, index) => {
                <li key={index}>{elem}</li>;
            })}
        </>
    );
};


const arr = ["item1", "item2", "item3", "item4", "item5"];





/*

While this sometimes works, using the index as a key can introduce issues especially if the list is expected to change.Consider this list.

Currently, the first list item, “Item1” is at index zero, but if you added another item at the beginning of the list, the “Item1” index would change to 1 which changes the behavior of your array.

The solution is to use a unique value as the index to ensure that the identity of the list item is maintained. */