//React uses JSX, which is an extension of ECMAScript.
//In React, a functional component is a function that returns JSX(an extension of JavaScript that allows you to use HTML tags inside JS code).
//You can think as if it is returning HTML to simplify things.The part that will be rendered used to be written inside the render() function in class-
//based React, if you are more familiar with that.
//To get this component rendered without a router or other complicated things, you can add it to App.vue.

/*
JSX is not a template engine. It has only one special syntax -- {} --
and the rest are just JavaScript.
statement inside of { } is evaluated as JavaScript.

 */
//React way
//In React, you have two ways to create components -- function and class.


import React from 'react';

function Sample() {
  return (
    <div>
      <h1>Sample</h1>
      <h2>This is a component.</h2>
    </div>
  );
}

export default Sample;


//!!!!!!!!!A functional component is a function that returns React element.It should looks like JavaScript returning HTML, but it's not. It's JSX.

//In order to use JSX, you have to import React though it doesn't seem to be referenced directly. (But in React v17.0,

//you can choose not to import React just for JSX.Read this official post for details.)

//Below is another way of creating react components with class syntax.

import React from "react";

function Structure() {
  return <div>Render me App</div>;
}

export default Structure;


/*
!!!!!!!!!!Class component's render method returns React element.

So, what is the difference between the two and which way should you choose to write your own React components?

  In v16.7 and below, class components have state management(data in Vue.js) and lifecycle methods--
both are crucial for useful components-- and functional ones didn't.

But, from v16.8, React introduced Hooks into functional components.

Hooks take care of state management and "side effects"(operations that should happen after rendering).

Although a few lifecycle methods are not "translated" in hooks, functional components can do pretty much the same

jobs as class components.And React team recommends functional way for your first choice.

 */


import React from 'react';

class Sample extends React.Component {
  render() {
    return (
      <div>
        <h1>Sample</h1>
        <h2>This is a component.</h2>
      </div>
    );
  }
}

export default Sample;
