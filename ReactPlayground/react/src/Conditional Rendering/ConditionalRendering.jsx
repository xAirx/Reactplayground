/* React doesn’t support directives, so you need to use the language to
conditionally return parts of a template.
https://sebastiandedeyne.com/react-for-vue-developers/#templates
The && operator provides a succinct way to write an if statement. */

export default function Awesome({ awesome }) {
  return <article>{awesome && <h1>React is awesome!</h1>};</article>;
}


/* If you need an else clause, use a ternary statement instead.
 */

export default function Awesome({ awesome }) {
  return (
    <article>
      {awesome ? (
        <h1>React is awesome!</h1>
      ) : (
        <h1>Oh no 😢</h1>
      )};
    </article>
}

/* You could also opt to keep the two branches completely separated, and use an early return instead.
 */
export default function Awesome({ awesome }) {
  if (!awesome) {
    return (
      <article>
        <h1>Oh no 😢</h1>
      </article>
    );
  }

  return (
    <article>
      <h1>React is awesome!</h1>
    </article>
  );
}



// Example 2

import React from 'react'

function ConditionalRendering() {
  const condition1 = false
  const condition2 = false

  function getMessage() {
    let message = ''

    if (condition1) {
      message = 'condition1 is true'
    } else if (condition2) {
      message = 'condition2 is true'
    } else {
      message = 'all conditions are false'
    }

    return <h1>{message}</h1>
  }

  return <>{getMessage()}</>
}

export default ConditionalRendering