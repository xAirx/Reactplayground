/* in Operator

https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/


The in operator carries a safe check for the existence of a property on an object. You can also use it as a type guard. For example: */

function signContract(partner: BusinessPartner): string {
  let message: string;

  if ("isCreditAllowed" in partner) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? "Sign a new contract the supplier "
      : "Need to evaluate further";
  }
  return message;
}
