import "./App.css";
import Todos from "./components/Todos.js";

function App() {
  const todos = [
    {
      id: 1,
      text: "Take out the trash",
      completed: true,
    },
    {
      id: 2,
      text: "Grocery shopping",
      completed: false,
    },
    {
      id: 3,
      text: "Clean gecko tank",
      completed: false,
    },
  ];

  return (
    <div className="App">
      <Todos todo={todos} />
    </div>
  );
}

export default App;
