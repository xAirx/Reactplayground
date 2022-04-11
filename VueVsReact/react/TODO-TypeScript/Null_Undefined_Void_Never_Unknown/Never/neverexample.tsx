/* Never

The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.

Variables also acquire the type never when narrowed by any type guards that can never be true.

The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

Some examples of functions returning never:
 */

//////////////// WE CAN GIVE THIS FUNCTION VOID SINCE IT ACTUALLY RETURNS NOTHING.

function generateError(message: string, code: number): void {
  throw { message: message, errorCode: code };
  // while (true) {}
}

/////////////// IT DOESNT JUST RETURN NOTHING IF WE ARE TOTALLY HONEST IT RETURNS

/////////////// This functions returns NEVER, this function never produces a return value.
function generateError(message: string, code: number): never {
  /* <---"Nevers inferred type is void.." */
  throw {
    message: message,
    errorCode: code,
  }; /* <---- crashes our script so nothing is ever returned. */
  // while (true) {}
}

/* if we wanted to continue our script we would do try catch..
https://javascript.info/try-catch
let json = "{ bad json }";
try {
let user = JSON.parse(json); // <-- when an error occurs...
alert( user.name ); // doesn't work
} catch (e) {
// ...the execution jumps here
alert( "Our apologies, the data has errors, we'll try to request it one more time." );
alert( e.name );
alert( e.message );
}

generateError('An error occurred!', 500);
/* console.log(result) */ //<---- NOTHING // ERROR
