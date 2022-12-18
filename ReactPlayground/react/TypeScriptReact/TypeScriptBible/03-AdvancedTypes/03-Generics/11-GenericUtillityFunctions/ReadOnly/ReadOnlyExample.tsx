/* Readonly
Readonly<T> takes the type it receives and marks all of its properties as read only.
This will cause compilation errors to be thrown if properties of the returned type are reassigned.
 */
interface Todo {
  isCompleted: boolean;
  text: string;
}

interface State {
  todos: Readonly<Todo>[];
}

const sampleTodos: Readonly<State> = {
  todos: [
    { isCompleted: false, text: "Learn more about TypeScript utilities" },
    { isCompleted: true, text: "Post Part 1 of TypeScript series" },
  ],
};

/*
 * The following will throw a compilation error, because we marked the Todos
 * as read only.
 */

sampleTodos.todos[0].isCompleted = true;

/*
 * In order to modify an existing todo we need to create a copy of it with
 * the desired modifications
 */

const newTodos = {
  todos: [
    { ...sampleTodos.todos[0], isCompleted: true },
    ...sampleTodos.todos.slice(1),
  ],
};
/* This utility can be beneficial for representing the immutability of a frozen object.
It can also enforce immutable handling of data structures for functional programming or other programming patterns such as handling state in Redux. */
