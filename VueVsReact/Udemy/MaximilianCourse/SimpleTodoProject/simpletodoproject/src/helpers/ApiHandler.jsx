// FetchRecipes

export const FetchTodos = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Adalab/recipes-data/master/todos.json"
  );
  const data = await response.json();
  return data;
};
