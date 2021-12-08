/*
Let's use the children prop for our previous
example to substitute our HTML form element with a Form component that renders all its inner
content with React's children prop:
  */

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <Form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <label>
        Your name:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>

      <button type="submit">Send</button>
    </Form>
  );
};


...

/* Let's continue with this substitution for the other React elements before we can reap the fruits
of having a composable React Form component.The Button component that has been shown before can
be used to render our button element: */

...


const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({ onClick, type = 'button', children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <Form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <label>
        Your name:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>

      <Button type="submit">Send</Button>
    </Form>
  );
};


...



/* Last but not least, the input field HTML element and its label.
Let's extract it to another
reusable React component:
 */
...


/*

As you can see, the InputField component becomes generic / abstract while all props are
passed to the component to specialize it.In addition, the component takes it one step
further than the Form and Button components, because it offers a new kind of "HTML element"
composition that encapsulates a label with an input field into one component.
It can be reused as such in our Form component but anywhere else too.

All three steps from before made our Form a composable React component.
The Form renders the HTML form element,
    but everything within is rendered with React's children.
     The same applies to the components within the Form component, which
     follow the same principle of composition in themselves, by just rendering
     anything that's passed to them with the children property. */


/* Also the generalizaton and specialization applies to these components.

The Button component,
in our case, is already a specialized case, because it doesn't use the default "button" type,
but a "submit" type to make it working in our submit form.

Then we don't need to pass the onClick function
to the button and therefore the onSubmit from the form element is used instead. */

const Button = ({ onClick, type = 'button', children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

const InputField = ({ value, onChange, children }) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </label>
);



const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);



const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <Form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <InputField value={username} onChange={setUsername}>
        Your name:
      </InputField>

      <Button type="submit">Send</Button>
    </Form>
  );
};


...
