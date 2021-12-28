//stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook

/* Functional updates

https://stackoverflow.com/questions/56108962/usestate-always-is-default-value-in-itself

If the new state is computed using the previous state, you can pass a function to setState.
 The function will receive the previous value, and return an updated value.
 Here’s an example of a counter component that uses both forms of setState:
 */

https: export default App = () => {
  const [state, setState] = useState({ fName: "", lName: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <input
        value={state.fName}
        type="text"
        onChange={handleChange}
        name="fName"
      />
      <input
        value={state.lName}
        type="text"
        onChange={handleChange}
        name="lName"
      />
    </>
  );
};

/*  Through onSubmit or button click */

setState((prevState) => ({
  ...prevState,
  fName: "your updated value here",
}));

///////////////////// Example 3 //////////////////

const Person = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here.
  };

  return (
    <form>
      <label htmlFor="first">
        First Name:
        <input
          id="first"
          name="firstName"
          type="text"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="last">
        Last Name:
        <input
          id="last"
          name="lastName"
          type="text"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
