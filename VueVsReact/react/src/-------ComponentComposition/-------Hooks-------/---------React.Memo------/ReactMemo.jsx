/* React.Memo

React.memo is a higher order component that memoizes the result of a function component. If a component returns the same result given the same props, wrapping it in memo can result in a performance boost. Take our <Header/> example earlier.

https://www.headway.io/blog/react-optimize-components-memo-usememo-usecallback
‍

Let's say it looks something like this: */

const Header = ({title}) => <h1>{title}</h1>

export default Header;

‍

/* We can see that this component isn't going to need to be rendered unless title changes, so it would be safe to wrap it in React.memo.
 */
‍

const Header = ({title}) => <h1>{title}</h1>

export default React.memo(Header);

‍
/*
Now, whenever Header is rendered, it will do a shallow comparison on it's props. If those props are the same, it will skip rendering and instead return it's last rendered value.
 */
‍

/* A quick note about using memo and react dev tools. At the time of this writing, wrapping your component like this…

‍ */

const Header = React.memo(({title}) => <h1>{title}</h1>));

export default Header;

‍

/* …will cause your component to show up as Unknown in react dev tools. To fix this, wrap your component in memo after defining it, like we did previously:
 */
‍

const Header = ({title}) => <h1>{title}</h1>;

export default React.memo(Header);
