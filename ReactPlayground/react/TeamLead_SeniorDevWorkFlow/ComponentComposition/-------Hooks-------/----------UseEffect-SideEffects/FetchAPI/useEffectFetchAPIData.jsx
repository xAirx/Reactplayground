/* Example 1: UseEffect with fetch inside */

/* Here is an example of fetching users data from the GitHub API: */

const App = () => {
  // The API URL.
  const APIurl = "https://api.github.com/users";

  // useState.
  const [users, setUsers] = useState([]);

  // useEffect.
  useEffect(() => {
    // This is possible, but its better to use async/await.
    // to do that we need to make a function that returns a promise.
    fetch(APIurl)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </>
  );
};


/* Example 2 - useEffect with Async / Await */


/* If you’re using async / await, then you will have to create a separate
function because the effect callback is anonymous and cannot be async.

Here is an example: */

const App = () => {
  // The API URL.
  const APIurl = "https://api.github.com/users"; // useState.
  const [users, setUsers] = useState([]); // useEffect.


  useEffect(() => {
    getUser();
  }, []); // Separate function.

  const getUser = async () => {
    const res = await fetch(APIurl);
    const data = await res.json();
    setUsers(data);
  };
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </>
  );
};


/*
As you can see above, this is how to fetch data with useEffect.
It’s similar to Vanilla JavaScript, you’re just using the effect hook. */


/* Example 3: */

https://dev.to/time2hack/integrating-rest-api-in-reactjs-with-fetch-useeffect-n01


/*
Now, if we want to make sure of newest rates for conversion of amount as well, we will need the following changes to the getRates function and useEffect hook alonf with the change handlers to update the amount in state:
 */

const App = () => {
  const [state, setState] = useState({
    rates: {},
    amount: 1,
    currency: "USD",
  });
  ...

  const getRates = (currency, amount = 1) => getData(
    `/latest?from=${currency}&amount=${amount}`
  ).then(({ rates }) =>
    setState((currentState) => ({
      ...currentState,
      rates,
    }))
  );
  useEffect(() => {
    getRates(state.currency, state.amount);
  }, [state.currency, state.amount]);

  ...
  return (...);
}
