/* Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

Numeric enums
We’ll first start off with numeric enums, which are probably more familiar if you’re coming from other languages. An enum can be defined using the enum keyword.
 */

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

/* Above, we have a numeric enum where Up is initialized with 1.

  All of the following members are auto-incremented from that point on.

  In other words, Direction.

  Up has the value 1, Down has 2, Left has 3, and Right has 4.

  If we wanted, we could leave off the initializers entirely:
   */

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

/* Here, Up would have the value 0, Down would have 1, etc.

  This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.

  Using an enum is simple: just access any member as a property off of the enum itself, and declare types using the name of the enum: */

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond("Princess Caroline", UserResponse.Yes);

/* Numeric enums can be mixed in computed and constant members (see below).
   The short story is, enums without initializers either need to be first, or have to come after numeric enums initialized with numeric constants or other constant enum members.
    In other words, the following isn’t allowed: */

enum E {
  A = getSomeValue(),
  B,
  /* Enum member must have initializer. */
}
