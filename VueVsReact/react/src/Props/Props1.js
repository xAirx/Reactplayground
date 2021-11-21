/* In React, we do not need to explicitly define what props will
 be passed in the child component.We can either use object
 destructuring to assign props to variables or access them
 using the props object.We access our props inside JSX,
    just like how we access the state. */

    // Parent component

import React from 'react'

function Address({ city, street, postalCode, houseNumber }) {
  return (
    <div>
      <p>City: {city}</p>
      <p>Street: {street}</p>
      <p>Postal Code: {postalCode}</p>
      <p>House Number: {houseNumber}</p>
    </div>
  )
}

export default Address

/* Child Component (Address.js) */

/* And we can pass the props from the parent like this:
 */
import React from 'react'

function UserInfo() {
  return (
    <div>
      <p>Name: Yigit</p>
      <Address
        city="Istanbul"
        street="Ataturk Cad."
        postalCode="34840"
        houseNumber="92"
      ></Address>
    </div>
  )
}

export default UserInfo