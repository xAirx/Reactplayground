/* User - defined Type Guards

https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/

User - defined type guards allow you to define a type guard or help TypeScript infer a type when you use a function.

A user - defined type guard function is a function that simply returns arg is aType.For example:
*/

function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

/* In this example, the isCustomer() is a user - defined type guard function.Now you can use it in as follows: */

function signContract(partner: BusinessPartner): string {
  let message: string;

  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    message = partner.isInShortList()
      ? "Sign a new contract with the supplier"
      : "Need to evaluate further";
  }
  return message;
}
