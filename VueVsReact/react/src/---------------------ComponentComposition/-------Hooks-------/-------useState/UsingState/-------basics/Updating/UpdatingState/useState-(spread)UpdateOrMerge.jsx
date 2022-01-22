const [todos, setTodos] = useState([]);

const handleAdd = (todo) => {
  setTodos([...todos, todo]);
};

/* Add to object
 */
const handleAdd = (todo) => {
  const newTodos = Object.assign({}, todos);
  newTodos[todo.id] = todo;
  setTodos(newTodos);
};

/* We can use spread operator to create shallow copy as well.
 */
const handleAdd = (todo) => {
  const newTodos = { ...todos };
  newTodos[todo.id] = todo;
  setTodos(newTodos);
};

/* Similar to arrays, there's a shortcut for doing this in one line:
 */
const handleAdd = (todo) => {
  setTodos({ ...todos, [todo.id]: todo });
};
// Larger example

const[array,setArray]= useState([
    {id: 1, value: "aws", othervalue: "was"},
    {id: 2, value: "goo", othervalue: "nano"},
    {id: 3, value: "micro", othervalue: "marcro"},
])

const updateItem = (id, whichvalue, newvalue)=> {
    let index = array.findIndex(x=> x.id === id);
/*this line is only neccessay if your element's id
isn't its postion/index in the array or related to it.
In the case that it is, use the id as the index, or run the function
(binary/hash) that relates the id to that position/index to find the index.
*/
    if (index !== -1){
        let temporaryarray = array.slice();
        temporaryarray[index][whichvalue] = newvalue;
        setArray(temporaryarray);
    }
    else {
        console.log('no match');
    }
}
    /* --longer version--
    var index = array.findIndex(x=> x.id === id);
    let g = array[index]
    g[whichvalue] = newvalue
    if (index === -1){
        console.log('no match')
    }
    else {
        setArray(
            [
            ...array.slice(0,index),
            g,
            ...array.slice(index+1)
            ]
        );
    }
    */

//how to use the function
onPress={()=>updateItem(2,'value','John Lemon')}
onPress={()=>updateItem(1,'othervalue','Stringo Stra')}
