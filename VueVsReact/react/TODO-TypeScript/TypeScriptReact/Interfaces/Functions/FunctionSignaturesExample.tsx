/* We can also declare function properties with function signatures. We can do this using old-school common JavaScript functions (sayHi), or ES6 arrow functions (sayBye):
 */

interface Speech {
  sayHi(name: string): string;
  sayBye: (name: string) => string;
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi("Heisenberg")); // Hi Heisenberg
console.log(sayStuff.sayBye("Heisenberg")); // Bye Heisenberg

/* Note that in the sayStuff object, sayHi or sayBye could be given an arrow function or a common JavaScript function – TypeScript doesn't care. */
