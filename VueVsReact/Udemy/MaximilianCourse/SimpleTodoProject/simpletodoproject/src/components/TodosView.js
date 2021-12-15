const TodosView = ({ name, completed }) => {
  <div>
    <h2>Recipe Name: {name}</h2>
    <p>Completed: {completed}</p>
  </div>;
};

// Example taking the entire recipe prop
/*
const Todos = (todos) => {
  const {name, completed } = recipe;

  return (
    <div>
      <h2>Todos Name: {name}</h2>
      <p>Completed: {completed}</p>
    </div>
  );
}; */

// Example taking the entire recipe prop
/*
const Todos = (props) => {
  const {name, completed } = recipe;

  return (
    <div>
      <h2>Todos Name: {props.name}</h2>
      <p>Completed: {props.completed}</p>
    </div>
  );
}; */

export default TodosView;
