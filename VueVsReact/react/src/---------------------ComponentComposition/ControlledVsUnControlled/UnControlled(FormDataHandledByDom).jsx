/* What are uncontrolled components in React ?

https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/


Uncontrolled components are those for which the form data is handled by the DOM itself.

“Uncontrolled” refers to the fact that these components are not controlled by React state.


The values of the form elements are traditionally controlled by and stored on the DOM.

We will have to refer to the instance of the form elements to retrieve their values from the DOM.
 */

function App() {
  function onSubmit() {
    console.log("Name value: " + window.name.value);
    console.log("Email value: " + window.email.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" id="name" required />
      <input type="email" name="email" id="email" required />
      <input type="submit" value="Submit" />
    </form>
  );
}

/* In the above code, we assigned ID attributes to the name and

email input elements with values name and email, respectively.

We used these id attributes to get the value of the input element when the form is being submitted.


The above component is an uncontrolled component because React has no control over the values of

the form input elements.


In this example, we used DOM APIs directly.

Now let’s refactor the code to do it in a React way: */

function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  function onSubmit() {
    console.log("Name value: " + nameRef.current.value);
    console.log("Email value: " + emailRef.current.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="email" name="email" ref={emailRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}

/* We created two React refs, nameRef and emailRef, and assigned them to the ref attributes

of name and email inputs, respectively.This will cause the refs to hold the HTMLElement

instances of the elements in their.current property.

From the current property, we can reference the value property to get the values of the input elements. */
