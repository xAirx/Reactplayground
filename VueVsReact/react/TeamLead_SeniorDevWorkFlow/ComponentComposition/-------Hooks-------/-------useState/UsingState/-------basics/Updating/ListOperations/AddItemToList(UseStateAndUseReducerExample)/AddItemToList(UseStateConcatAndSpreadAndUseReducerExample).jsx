import React from "react";
import { v4 as uuidv4 } from "uuid";

https://github.com/the-road-to-learn-react/react-add-item-to-list/blob/master/src/App.js

const initialList = [
  {
    id: "a",
    name: "Robin",
  },
  {
    id: "b",
    name: "Dennis",
  },
];

// ** with useState  ** //

const App = () => {
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");

  function handleChange (event) {
    setName(event.target.value);
  }

  /////// HandleAdd With Concat /////////
  function handleAdd () {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName("");
  }

  /////// HandleAdd With spread /////////
  function handleAddWithSpread () {
    const newListWithSpread =
      setList((currentList) => [...currentList, { name, id: uuidv4() }]);
    setName("");
  }

  return (
    <div>
      <AddItem name={name} onChange={handleChange} onAdd={handleAddWithSpread} />
      <List list={list} />
    </div>
  );
};



// ** with useReducer and complex object ** //

const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: state.list.concat({ name: action.name, id: action.id }),
      };
    default:
      throw new Error();
  }
};

const App2 = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
  const [name, setName] = React.useState("");


  const AddItem = ({ name, onChange, onAdd }) => (
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );

  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  function handleChange (event) {
    setName(event.target.value);
  }

  function handleAdd () {
    dispatchListData({ type: "ADD_ITEM", name, id: uuidv4() });

    setName("");
  }

  return (
    <div>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

      <List list={listData.list} />
    </div>
  );
};


export default App;
