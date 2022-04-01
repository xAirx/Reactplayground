/* React Component Composition by Example

You have seen how component composition is mainly used for reusable React components that require a well-designed API.
Often you will find this kind of component composition just to layout your application as well. For instance, a SplitPane component,
 where you want to show something at the left and the right as the inner content of the component, could make use of React props to
 render more than one child component:
 */

const SplitPane = ({ left, right }) => (
  <div>
    <div className="left-pane">{left}</div>
    <div className="right-pane">{right}</div>
  </div>
);

/* Then it could be used the following way in another React component whereas you decide what you render as children in which of both slots:
 */

<SplitPane
  left={
    <div>
      <ul>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
      </ul>
    </div>
  }
  right={<Copyright label="Robin" />}
/>

/* Whereas the Copyright component is just another React component: */

const Copyright = ({ label }) => <div>Copyright by {label}</div>;

/*
This pattern, not widely known under the synonym slot pattern, is used when you have more than one children that you want to compose into another component.
Again the component, in this case the SplitPane component, doesn't know ahead of time what will be rendered in there.
It just receives something as props to render in these slots.

In the example, two slots are used.But it scales up to any number of
props you want to pass to the component to render something.
