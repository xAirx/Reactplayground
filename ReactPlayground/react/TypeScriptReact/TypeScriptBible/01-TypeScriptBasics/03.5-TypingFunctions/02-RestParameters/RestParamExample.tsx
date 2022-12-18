/*
TypeScript - Rest Parameters
https://www.logicbig.com/tutorials/misc/typescript/function-rest-parameters.html
Similar to JavaScript rest parameters, TypeScript also supports rest parameter. For example */

function test(...args: number[]) {
  console.log(args.length);
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
test(1, 3);

/* Output
2
[ 1, 3 ]
1
3

The corresponding JavaScript code when compiled with --target es6: */

function test(...args) {
  console.log(args.length);
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
test(1, 3);

/* The corresponding JavaScript code when compiled without --target es6: */

function test() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  console.log(args.length);
  console.log(args);
  args.forEach(console.log);
}
test(1, 3);

/* Rest parameter must be at the end of other parameters. For example */

function test(msg: string, ...args: number[]) {
  console.log(args.length);
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  console.log(msg);
}
test("test msg", 1, 3);

/* Output
2
[ 1, 3 ]
1
3
test msg

If we don't put rest parameter at end, TypeScript will give compile time error:
 */
function test(...args: number[], msg: string) {
  console.log(args.length);
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  console.log(msg);
}

test(1, 3, "test msg");

/* Output
rest-not-at-end-example.ts(1,15): error TS1014: A rest parameter must be last in a parameter list.
rest-not-at-end-example.ts(9,1): error TS2554: Expected 2 arguments, but got 3. */
