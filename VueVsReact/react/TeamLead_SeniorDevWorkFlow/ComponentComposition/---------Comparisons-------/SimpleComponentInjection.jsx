/* In React, it is much simpler. I think the slots overcomplicate things a lot.
 As React uses JSX, we can just get away with passing the component to be rendered as a prop.
 */

import React from 'react'
import Child from './Child'

///Parent.js


function Parent () {

  const compToBeRendered = (
    <div>
      <h1>Hello</h1>
      <button>Im button</button>
    </div>
  )

  return (
    <div>
      <Child compToBeRendered={compToBeRendered}></Child>
    </div>
  )
}

export default Parent



///Child.js

import React from 'react'

function Child({ compToBeRendered }) {
  return (
    <div>
      <h1>In child:</h1>
      {compToBeRendered}
    </div>
  )
}

export default Child
