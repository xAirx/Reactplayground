/* Let's compare the syntax of both approaches:
   Composing objects with types and interfaces
 */

type Name = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};

// Intersection type
type Contact = Name & PhoneNumber;

interface Name {
  firstName: string;
  lastName: string;
}
interface PhoneNumber {
  landline: string;
  mobile: string;
}

// can only extend interfaces this constraining the interface to accept the types within have name and phonenumber here.
interface Contact extends Name, PhoneNumber {}

const contact: Contact = {
  firstName: "Harry",
  lastName: "Potter",
  landline: "0123456789",
  mobile: "07123456789",
};

// composing objects with types and interfaces

type Name = {
  firstName: string;
  lastName: string;
};
interface PhoneNumber {
  landline: string;
  mobile: string;
}

// Intersection type we cannot extend with types so we need to use an intersection type.
type Contact = Name & PhoneNumber;

//Only type aliases can compose union types though:

type StringActions = { type: "loading" } | { type: "loaded"; data: string[] };
type NumberActions = { type: "loading" } | { type: "loaded"; data: number[] };
// Intersection ttype
type Actions = StringActions & NumberActions;
