/* String enums
String enums are a similar concept, but have some subtle runtime differences as documented below.
In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member. */

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

/* While string enums don’t have auto-incrementing behavior, string enums have the benefit that they “serialize” well.
  In other words, if you were debugging and had to read the runtime value of a numeric enum, the value is often opaque - it doesn’t convey any useful meaning on
  its own (though reverse mapping can often help). String enums allow you to give a meaningful and readable value when your code runs, independent of the name of the enum member itself. */
