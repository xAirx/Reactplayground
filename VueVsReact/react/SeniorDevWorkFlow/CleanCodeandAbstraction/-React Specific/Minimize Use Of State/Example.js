/* 2. Avoid Using State(If Possible)
React state keeps track of the data which when changed triggers the React component to re - render.When building React applications, avoid using state as much as possible since the more state you use, the more data you have to keep track of across your app.

One way of minimizing the use of state is by declaring it only when necessary.For instance, if you are fetching user data from an API, store the whole user object in the state instead of storing the individual properties.

Instead of doing this: */

const [username, setusername] = useState('')
const [password, setpassword] = useState('')

/* Do this: */

const [user, setuser] = useState({})