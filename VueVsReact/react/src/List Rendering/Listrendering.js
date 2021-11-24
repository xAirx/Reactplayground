/* With React, you can “map” the array to a set of elements using the built in Array.map function.
In React, we will use the Arrays.map function to iterate over the array and return a JSX tag for each element.
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