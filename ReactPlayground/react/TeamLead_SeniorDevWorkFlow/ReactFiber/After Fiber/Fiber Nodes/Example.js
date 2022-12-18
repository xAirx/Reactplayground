/* It’s definitely quite a lot to take in, so don’t feel stressed if you don’t understand something right away.

It takes time as everything worthwhile.Note that you don’t need to know any of it to use React.This article is about how React works internally.

    https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react

Setting the background
Here’s a simple application that I’ll use throughout the series.

We have a button that simply increments a number rendered on the screen:


And here’s the implementation: */

<>
    class ClickCounter extends React.Component {
        constructor(props) {
        super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => {
            return { count: state.count + 1 };
        });
    }


    render() {
        return [
    <button key="1" onClick={this.handleClick}>Update counter</button>,
    <span key="2">{this.state.count}</span>
    ]
    }
}

/* As you can see, it’s a simple component that returns two child elements button and span from the render method.
As soon as you click on the button, the state of the component is updated inside the handler.
This, in turn, results in the text update for the span element.

There are various activities React performs during reconciliation.

For example, here are the high-level operations React performs during the first render and after state update in our simple application:

    updates count property in the state of ClickCounter
    retrieves and compares children of ClickCounter and their props
    updates props for the span element
    There are other activities performed during reconciliation like calling lifecycle methods or updating refs.

    All these activities are collectively referred to as “work” in the Fiber architecture.

    The type of work usually depends on the type of React element. For example, for a class component, React needs to create an instance, while it doesn’t do that for a functional component.

    As you know, we have many kinds of elements in React, e.g. class and functional components, host components (DOM nodes), portals etc. The type of React element is defined by the first parameter to the createElement function.

    This function is generally used in the render method to create an element.

    Before we begin our exploration of the activities and the main fiber algorithm, let’s first get ourselves familiar with the data structures used internally by React. */