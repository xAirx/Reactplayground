import "./App.css";
import RecipeComponent from "./components/recipes/RecipeComponent";
import Todos from "./components/todos/todos";

function App() {
  return (
    <div className="App">
      <RecipeComponent />
      <Todos />
    </div>
  );
}

export default App;
