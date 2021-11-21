<Content>
  <p>Hello world</p>
</Content>;

function Content({ children }) {
  // children -> <p>Hello world</p>
  return (
    <article>
      <h1>This is a title.</h1>
      {children}
    </article>
  );
}

/* You can neither have multiple children nor name it.

But children is just a prop.The example above is essentially
same as below: */

<Content children={<p>Hello world</p>} />;

/* So you can just do this for inserting multiple elements. */

return (
  <MyComponent
    header={<MyHeader />}
    content={<MyContent />}
    footer={<MyFooter />}
  />
);

function MyComponent({ header, content, footer }) {
  return (
    <div>
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </div>
  );
}
