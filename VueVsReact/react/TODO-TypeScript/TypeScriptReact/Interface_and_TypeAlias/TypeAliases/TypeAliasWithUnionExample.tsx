/* Type Aliases
Type Aliases can reduce code duplication, keeping our code DRY. Below, we can see that the PersonObject type alias has prevented repetition, and acts as a single source of truth for what data a person object should contain.
 */

type StringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person1: PersonObject = {
  name: "John",
  id: 1,
};

const person2: PersonObject = {
  name: "Delia",
  id: 2,
};

const sayHello = (person: PersonObject) => {
  return "Hi " + person.name;
};

const sayGoodbye = (person: PersonObject) => {
  return "Seeya " + person.name;
};
