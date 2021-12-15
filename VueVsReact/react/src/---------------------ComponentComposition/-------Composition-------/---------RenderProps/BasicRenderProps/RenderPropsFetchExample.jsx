/* Render Props is an amazing concept used in React to share code and functionality between components.

With this technique, we have a component that houses some codes and functionalities which other components can partake.

The bigger component uses the render prop of the smaller component as a medium to pass some data to the smaller component as well as determine what would be displayed on the UI.

render is the name used for such props, but it could be named anything, including coffee.

The purpose of the prop is to determine what would be rendered on the UI by the bigger component,

so any prop(which has to be a function) that does this work is called a render prop.

Before looking at how to use this awesome feature, let's look at why we'd even need it. */


/* Render props


Focus:  Reuseabillity, separating concerns.



Solves:

Fundamentally, render props solves the problem of react component logic code reuse .


What do render props solve?:

	• Reuse code across components when using ES6 classes.

	• The lowest level of indirection - it’s clear which component is called and the state is isolated.

	• No naming collision issues for props, state and class methods.

	• No need to deal with boiler code and hoisting static methods.



Explanation:


A render prop is where a component’s prop is a function and this is called in the render method of the component.

Calling the function can return a React element or component to render.



When to use render props:

So when do I use render props?

I use them when I want to reuse component logic and when I want to abstract away imperative code to provide a easier to understand declarative API.

So I use render props all the time!

Not in every component, but definitely when I find myself in one of those two situations.


Disadvantages :


Minor problems:

	• Caution using shouldComponentUpdate as the render prop might close over data it is unaware of.

	• There could also be minor memory issues when defining a closure for every render.

	• But be sure to measure first before making performance changes as it might not be an issue for your app.

	• Another small annoyance is the render props callback is not so neat in JSX as it needs to be wrapped in an expression. Rendering the result of an HOC does look cleaner.


Caveats:

Be careful when using Render Props with React.PureComponent
Using a render prop can negate the advantage that comes from using React.PureComponent if you create the function inside a render method.

This is because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop.

However, you have also seen that problems which are solved by renders props can be solved by other patterns (e.g. simply rendering the component within or lifting state) too. Last but not least, the article should have shed some light into the terminology of the render prop pattern/components, children as a function and render prop itself.
*/




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* The ideal usage of render props occurs when there are multiple components to share functionality.

Let's look at a scenario for render props.

It is very common in React applications(or any application) to fetch data from an external service, for example, a server.

To achieve this, you may have various useEffects and useStates(using React Hooks) across different components which would be used
to get the data and update the state of data during mount.

Looking at this scenario, we can see that ComponentA may fetch all users and display their pictures while ComponentB may
fetch a user's details and display the details.

ComponentA and ComponentB obviously have different UIs but they do the same thing:

    make fetch request
    update state with response gotten
    use the state on the UI

The state would contain the data gotten and additionally, we could have an isLoading state (a common practice).

Render props are ideal for such cases. Let's head over to how to use it.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


How to use Render Props

Both components share the same logic, so we could manage this logic in one place.

We'd need to have a bigger component which handles the logic that would be shared across other components.

Let's call the component FetchComponent.

It would be used like this:
 */


// In the component .js file
import React, { useState } from 'react'

const FetchComponent = (props) => {
    const { coffee } = props

    const [state, setState] = useState({
        data: null,
        isLoading: false
    })
    // do whatever with the state
    const renderProp = coffee
    return (
        renderProp(state)
    )
}
export default FetchComponent

/*
This is the basic structure of the bigger component.
We manage some state (data and isLoading), perform some functionalities with the state and render what the consumer component decides to be
rendered using the render prop (in our case coffee, though name not descriptive, but just so you understand that the prop could be called anything).
As you'd notice, this component returns the result (the returned value) of the render prop function which is called with the state argument.
This means the consumer component has access to the state.
Our structure now doesn't solve our problem yet. We need to make a fetch request.
But to which endpoint? We could receive that as props. Let's modify the component more.
 */

// In the component .js file
import React, { useState, useEffect } from 'react'
import {fetchData} from './utils'

const FetchComponent = (props) => {
    const {coffee, endPoint} = props
    const [state, setState] = useState({
        data: null,
        isLoading: false
    })
    const renderProp = coffee

    useEffect(() => {
        const data = fetchData(endPoint)
        setState({
            data,
            isLoading: true
        })
    }, [])

    return (
        renderProp(state)
    )
}
export default FetchComponent

/* That's it for the main component.

Using useEffect, we make a fetch request to the endpoint provided by
the consumer component.fetchData is an assumed function that makes a fetch request.It depends on the method
you want to achieve that - could be axios.It would also be asynchronous so you would have to handle it with
promise or async / await.I didn't bother about that for the simplicity of the article.

When the data is gotten, the state is updated and of course, the consumer component is re-rendered.

Let's head over to our consumer components. For simplicity, we'd consider only two components.

For the first component, which is UsersComponent, we have:
 */

// in the UsersComponent file
import React from 'react'
import FetchComponent from 'path-to-component'

const UsersComponent = () => {
    return (
        <FetchComponent coffee={(state) => {
            // do whatever you want with the state
            return (
                // whatever ui you want
                state.isLoading ? (
                    <p>Loading users....</p>
                ) : (
                    <div>
                        {state.data.map(user => (
                            {/* show users */}
                        ))}
                    </div>
                )
            )
        }} />
    )
}
export default UsersComponent

/* For the second component, UserProfile, we have: */

// in the UserProfile file
import React from 'react'
import FetchComponent from 'path-to-component'

const UserProfile = () =>
    return (
        <FetchComponent coffee={function(state) {
            // do whatever you want with the state
            return (
                // whatever ui you want
                 state.isLoading ? (
                    <p>Loading details....</p>
                ) : (
                    <div>
                        {state.data.map(details => (
                            {/* show details */}
                        ))}
                    </div>
                )
            )
        }} />
    )
}
export default UsersComponent


/* From these components, you'd notice how the coffee prop works. It returns what would be displayed on the UI.
Tip

If you love having elements between opening and closing tag, like <Component>...</Component>, that's also possible with render props. It's not compulsory for render props components to appear as <Component />. To achieve this, we can make use of the children prop. Remember that any prop could be a render prop. Hence we'd have:

In FetchComponent, */

...
const renderProp = props.children
return (
    renderProp(state)
)
...

In other components,

...
return (
    <FetchComponent>
        {(state) => {
            // ui to render
        }}
    </FetchComponent>
)
...

/* Whichever you love, use it.
Things to Note

    UsersComponent and UserProfile didn't have to look the same.
    They could use their instance of state however they wanted.
    FetchComponent did not care what other components look like.
    It's majorly concerned with the logic.
    FetchComponent is very usable with the very little number of props required.
 */