/* instanceof

https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/

Similar to the typeof operator, TypeScript is also aware of the usage of the instanceof operator.

For example: */
/* How it works: */

interface Customer {
  isCreditAllowed(): boolean;
}
interface Supplier {
  isInShortList(): boolean;
}

/* Second, create a type alias BusinessPartner which is a union type of Customer and Supplier.
 */
// Union
type BusinessPartner = Customer | Supplier;

/* Third, declare a function signContract() that accepts a parameter with the type BusinessPartner.
 */
function signContract(partner: BusinessPartner): string {
  let message: string;

  /* Finally, check if the partner is an instance of Customer or Supplier, and then provide the respective logic.
   */

  /* Inside the following if block, TypeScript knows that the partner is an instance of the Customer type due to the instanceof operator: */

  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }

  /* Likewise, TypeScript knows that the partner is an instance of Supplier inside the following if block:
   */

  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "Need to evaluate further";
  }
  return message;
}

/*
    When an if narrows out one type, TypeScript knows that within the else it is not that type but the other.
    For example:
    function signContract(partner: BusinessPartner): string {
    let message: string;
    if (partner instanceof Customer) {
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
    // must be Supplier
    message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }
    return message;
    }
    */
