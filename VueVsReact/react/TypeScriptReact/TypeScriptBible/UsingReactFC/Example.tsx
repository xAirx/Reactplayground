/* Why you probably shouldn’t use React.FC to type your React components
This post is nuanced, but read it and you might change your opinion about using React.FC.

Note that this is just an opinion, nothing more.If you like to use React.FC and it works for you, continue to do so! 😄
However, if you want to get a more nuanced view, continue reading.

 */

/* The FunctionComponent
In a lot of codebases you can find components similar to this: */

const MyComponent: React.FC<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);

/* What value does React.FC(or React.FunctionComponent) give ?

The properties that are given to MyComponent are typed.
It seems to me that it’s unnecessary.

Even more, it brings no benefits and it even has downsides.
 */

/* The downsides

Implicit children

React.FC or React.FunctionComponent provides an implicit definition of children.
This means that when you type your component with React.FC, the component automatically accepts children provided to your component.

The component in the example above can be used like this: */
function Container() {
  return (
    <MyComponent message="this does something">this does nothing</MyComponent>
  );
}

/* It will not throw any typescript error, but it actually should, because the children do nothing.
Having to manually type your children type also means it gives you control about what you want as children.

If you would define MyComponent like this: */
const MyComponent = ({ children }: { children: string }) => (
  <div>{children}</div>
);

/* Then you would get info that you need to provide a string as a child.
 */ function Container() {
  return <MyComponent>this is your string message</MyComponent>;
}
/* Usually, you can do children: React.ReactNode if you want to be flexible in what you provide your component.


Compound components are hard to read

Let’s say you want a component that can be used like this: */

<Select>
  <Select.Item>Item 1</Select.Item>
</Select>;

/* It is possible with React.FC to create compound components, but the typing makes the code unreadable fast. */

const Select: React.FC<SelectProps> & { Item: React.FC<ItemProps> } = (
  props
) => {};

Select.Item = (props) => {};
/*

Without React.FC, it just works. */

const Select = (props: SelectProps) => {};

Select.Item = (props: ItemProps) => {};

/* Of course, there are more downsides and if you want to dive deeper, I recommend you to read this PR on Github.

    Consensus
Even though I think React.FC has a certain value because it’s accessible to beginners, I do think once you get used to using Typescript, it’s important to properly type your components so they can be used as they should.
 */
