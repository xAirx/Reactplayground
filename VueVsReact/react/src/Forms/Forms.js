/* React doesn't introduce sytax sugar for bi-directional data update.
You have to implement it on your own by combining state and event. */

const [name, setName] = useState("");
const handleInput = (e) => setName(e.target.value);

return <input type="text" onChange="handleInput" value="name" />;

/* It's a bit annoying writing this boilerplate almost everytime
dealing with forms.But I think this kind of simplicity, or
"give you no sugar", "write what you need on your own as possible"
 style is very React - ish. */
