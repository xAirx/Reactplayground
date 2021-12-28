/* Arrays
 */
const [items, setItems] = useState([]);

// Completely replaces whatever was stored in the items array
setItems([{ item1 }, { item2 }]);

// Don't use JS array methods such as pop, push, shift, unshift
// as these will not tell React to trigger a re-render.
items.push({ item3 });

// Instead, make a copy of the array then add your new item onto the end
setItems([...items, { item3 }]);

// To update an item in the array use .map.
// Assumes each array item is an object with an id.
setItems(
  items.map((item, index) => {
    item.id === id ? newItem : item;
  })
);

/* Update array
 */

const handleUpdate = (index, todo) => {
  const newTodos = [...todos];
  newTodos[index] = todo;
  setTodos(newTodos);
};
