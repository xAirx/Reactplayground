f;
//Exampele 1.

function handleAdd() {
  const newItem = {
    id: uuidv4(),
    name: name,
    count: 0,
  };
  const newList = list.concat(newItem);
  setList(newList);
}

// Example 2.

import React from "react";

const initialList = ["Learn React", "Learn Firebase", "Learn GraphQL"];

const ListWithAddItem = () => {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState(initialList);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value) {
      setList(list.concat(value));
    }

    setValue("");

    event.preventDefault();
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ListWithAddItem;
