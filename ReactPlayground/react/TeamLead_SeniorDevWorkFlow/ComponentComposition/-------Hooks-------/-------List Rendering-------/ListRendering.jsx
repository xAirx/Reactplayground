/* With React, you can “map” the array to a set of elements using the built in Array.map function.
In React, we will use the Arrays.map function to iterate over the array and return a JSX tag for each element.
 */



/* The Non-React Way to Render a List

If you’re not accustomed to functional programming yet, your first inclination to render a list might be to create a new array, then iterate over the list and push JSX elements into it.

Something like this: */

function NonIdiomaticList(props) {
  // Build an array of items
  let array = [];
  for(let i = 0; i < props.items.length; i++) {
    array.push(
      <Item key={i} item={props.items[i]} />
    );
  }



/* The React Way to Render a List

This component uses Array’s built-in map function to create a new array that has the same number of elements, and where each element is the result of calling the function you provide.
 */

// Render it
  return (
    <div>
      {array}
    </div>
  );
}


/* A Note on the key Prop

You might’ve noticed I used the item’s array index as the key prop in both examples above.

This is actually not a great idea in all cases, and I’ll tell you why.

(The best choice for a key is an item’s unique ID, if it has one.)

React relies on the key to identify items in the list.

 Remember React uses a virtual DOM, and it only redraws the components that changed since the last render.

The first time a component like IdiomaticReactList is rendered, React will see that you want to render a bunch of items, and it will create DOM nodes for them.

The next time that component renders, React will say, “I already have some list items on screen – are these ones different?” It will avoid recreating DOM nodes if it can tell that the items are the same.

But here’s the important bit: React can’t tell with a simple equality check, because every time a JSX element is created, that’s a brand new object, unequal to the old one.
 */

// Example 1

export default function Recipe({ ingredients }) {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}

/// Example 2

import React from 'react'

function RenderingLists() {
  const cities = [
    'Istanbul',
    'München',
    'Los Angeles',
    'London',
    'San Francisco',
  ]

  return (
    <div>
      <h1>Cities</h1>
      {cities.map((city, index) => (
        <h4 key={index}>{city}</h4>
      ))}
    </div>
  )
}

export default RenderingLists