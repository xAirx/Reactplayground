function canDrink(person) {
  if (person?.age != null) {
    if (person.age < 18) {
      console.log("Nope");
    } else if (person.age < 21) {
      console.log("You can have a drink, but not a drink and a drink");
    } else {
      console.log("You can have a drink");
    }
  } else {
    console.log("you are not a person");
  }
}

// Removing nesting makes the code easier to work with and better overall.

/// Nesting if statements is not great, we have to keep track of all the other conditions above each nested if statement

// A better way to write it is to be more conise

// Guard Clauses
/* Returning out of the function early
 */

/* Single Return policy

Is something that can become a bad thing since it really makes the code more prone to nesting situations.
If we use more than one return in a function we can have guard clauses that return early

 */

function betterCanDrink(person) {
  if (person?.age === null) return console.log("you are not a person");

  // same as
  /*

  if (person.age === null) {
    console.log("you are not a person");
    return;
  } */

  const result = canDrink(person.age);
  console.log(result);

  /* if (person.age < 18) return console.log("Nope");
  if (person.age < 21) {
    console.log("You can have a drink");
    return;
  } */

  // another way is using a result variable to store the result in.

  /* let result;
  if (person.age < 18) {
    result = "Nope";
  } else if (person.age < 21) {
    result = "not in the us";
  } else {
    result = "You can have a drink";
  }
  console.log(result); */

  /*  but it would make more sense to have this inside its own function
   */
}

function canDrink(age) {
  if (age < 18) return console.log("Nope");
  if (age < 21) return console.log("Not in the us");
  // default return
  return yes;
}

const p = {
  age: 21,
};

betterCanDrink(p);
