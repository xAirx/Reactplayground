////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Reusable Components in React?

Basically a React application is just a bunch of components in a component tree.

There is one root component which kicks of the rendering for all the other components below.

What about reusing components because they serve a more common purpose?
 */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* How to make a React component reusable?

Generally speaking we make a component more reusable by turning it from specific to more generic.

 That can be achieved by offering an API for the component.

In React, a component's API is its props.

Let's experience this by refactoring a component from being very specific to being more generic.

Usually when we start off with our React application, we don't have any components except for our root component commonly called App:
 */

//Maincomponent

import React from 'react';
const App = () => {
    const handleClick = () => console.log('Clicked!');
    return (
        <div>
            <button type="button" onClick={handleClick}>
                Click me!
            </button>
        </div>
    );
};
export default App;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Giving the button its own component

For instance, in order to make this HTML button reusable in React, we have to extract it to its own component. Let's define a Button component for it:
 */

//Maincomponent

import React from 'react';
const App = () => {
    return (
        <div>
            <Button />
        </div>
    );
};

//Buttoncomponent
const Button = () => {
    const handleClick = () => console.log('Clicked!');
    return (
        <button type="button" onClick={handleClick}>
            Click me!
        </button>
    );
};
export default App;




////////////////////////////////Giving the button its own API *////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Using this Button component as element in React's JSX creates every time a new instance of this Button component.

 That's already half of the work you have to perform in order to make a component reusable in React.

However, even though the component is reusable in React's perspective, it isn't really reusable yet, because every Button component implements the same behavior.

 In the next code snippet, all components would do the same because they follow the same implementation details:

Giving the button its own API */


//MainComponent
import React from 'react';
const App = () => {
    return (
        <div>
            <Button />
            <Button />
        </div>
    );
};



/* Let's change this by giving the Button component an API which is our interface to command our Button component from the outside.

For instance, the most important thing to implement from the outside would be the click handler.

Every button should behave differently when clicking it: */


/* Further Refactoring
From there you can refactor it step by step by moving more properties outside of the specific Button component to make it more generic by using its API.
Another property could be the label showing up for the button: */

//Button component
const Button = ({ label, handleClick }) => {
    return (
        <button type="button" onClick={handleClick}>
            {label}
        </button>
    );
};

//Main component
const App = () => {
    return (
        <div>

            {/* // we are implementing two differnet buttons here // */}
            <Button
                label={'Click Button One!'}
                handleClick={() => console.log('Clicked button One!')}
            />

            <Button
                label={'Click Button Two!'}
                handleClick={() => console.log('Clicked button Two!')}
            />
        </div>
    );
};




/* //////////////////////////////////////////////////////////////////////////////////////////////////////////Composition
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
We can also use React's built-in children property which is commonly used for composition in React:

 */
// Main component
const App = () => {
    return (
        <div>

            <Button handleClick={() => console.log('Clicked button One!')}>
                Click Button One!
            </Button>

            <Button handleClick={() => console.log('Clicked button Two!')}>
                Click Button Two!
            </Button>
        </div>
    );
};


//Button component

const Button = ({ handleClick, children }) => {
    return (
        <button type="button" onClick={handleClick}>
            {children}
        </button>
    );
};


/* The Button component is almost a 100 % generic by offering an API to the outside.


/////////////////////////////////////////////////Setting the Type as a generic PROP///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


One piece is missing though.

Using the default prop to change attributes in our button component */



/* The type attribute of our button is wired in the Button component and we cannot do anything about it from the outside.

However, we have also seen that it makes things easier, because most of the time HTML button elements have the type = "button" and thus we
don't need to provide it for every Button component from the outside.

But what about cases where we want to change the type attribute (e.g.changing it to submit)? */


//Main component

/* We can implement a default prop for our Button component for the type property.
Every time we specify this property from the outside, we override the default prop given in the Button component see (Button Two example)
But every time nothing is provided, the default prop is used instead(here: Button One example).
*/

//Button component

const Button = ({ type = 'button', handleClick, children }) => {
    return (
        <button type={type} onClick={handleClick}>
            {children}
        </button>
    );
};


const App = () => {
    return (
        <div>
            {/* //Button one */}
            <Button handleClick={() => console.log('Clicked button One!')}>
                Click Button One!
            </Button>

            {/* // Button two */}
            <Button
                type="submit"
                handleClick={() => console.log('Clicked button Two!')}
            >
                Click Button Two!
            </Button>
        </div>
    );
};

/*
You have seen how to refactor a React component from being specific to being more generic.
Generic React components are commonly widely used in the entire application because they are highly reusable.

Another benefit is having the implementation of one widely used component of your application at one place.

In case something changes in the implementation details for this component, you can adjust it at this one place and it takes effect everywhere in your application.
 */