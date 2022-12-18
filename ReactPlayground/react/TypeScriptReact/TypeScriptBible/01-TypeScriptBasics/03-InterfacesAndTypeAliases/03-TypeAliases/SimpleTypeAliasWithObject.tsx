type User8 = { name: string; age: number };

const uix: User8 = { name: "Danny", age: 30 }; // this works

// This allows you to avoid unnecessary repetition and manage types centrally.

/// Simplifying code example with TypeAliases.

function greet(user: { name: string; age: number }) {
  console.log(`Hello ${user.name}`);
}

function isOlder(user: { name: string; age: number }, age: number) {
  return user.age > age;
}

// Refactor with type aliases

type User9 = { name: string; age: number };

function greet(user: User9) {
  console.log(`Hello ${user.name}`);
}

function isOlder(user: User9, age: number) {
  return user.age > age;
}
