/* Heterogeneous enums
Technically enums can be mixed with string and numeric members, but it’s not clear why you would ever want to do so: */

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

/* Unless you’re really trying to take advantage of JavaScript’s runtime behavior in a clever way, it’s advised that you don’t do this.

Computed and constant members
Each enum member has a value associated with it which can be either constant or computed. An enum member is considered constant if:

It is the first member in the enum and it has no initializer, in which case it’s assigned the value 0: */

// E.X is constant:
enum E {
  X,
}

/* It does not have an initializer and the preceding enum member was a numeric constant.
In this case the value of the current enum member will be the value of the preceding enum member plus one.
 */
// All enum members in 'E1' and 'E2' are constant.

enum E1 {
  X,
  Y,
  Z,
}

enum E2 {
  A = 1,
  B,
  C,
}
