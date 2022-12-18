/* Using the keyof type operator
The keyof type operator returns a union of the keys of the type passed to it. For example:
 */
type AppConfig = {
  username: string;
  layout: string;
};

type AppConfigKey = keyof AppConfig;
/* The AppConfigKey type resolves to "username" | "layout". Note that this also works in tandem with index signatures: */

type User22 = {
  name: string;
  preferences: {
    [key: string]: string;
  }
};

type UserPreferenceKey = keyof User22["preferences"];
/* The UserPreferenceKey type resolves to string | number (number because accessing JavaScript object properties by number is valid syntax).
Read about the keyof type operator here. */



// Example 2


/* Understanding a mapped type */
/* A mapped type is the process of creating a new type by mapping type information from an existing type. */


type MappedTypeName = { [K in UnionType]: ExistingType };
/* The in operator maps over each item in the union type to create a new type.In other words, the in operator allows us to loop through each type in a union type.In a loop iteration, wach item in the union type is put in K, which becomes a key in the new type.So, the union type is usually a union of string literals.The type annotation in the mapped type is the type given to each key in the type.

So: */

type ContactDetails = { [K in "name" | "email"]: string };
/* ... creates the following type: */

{
  name: string;
  email: string;
}

/* This becomes more useful when used with the keyof operator we learned about in the last lesson:
 */

type MappedTypeName = {
  [K in keyof ExistingType1]: ExistingType2;
};

/* This creates a new type containing the keys from another type. */

/*
Consider the code below: */


type SavingAction = {
  type: "saving";
  payload: string[];
}
const savingAction: SavingAction = {
  type: "saving",
  payload: ["Apple", "Banana", "Strawberry"]
}
type SavedAction = {
  type: "saved";
}
const savedAction: SavedAction = {
  type: "saved"
}
type Actions = SavingAction | SavedAction;


/* How can we remove the type annotations from the savingAction and savedAction variables but maintain strong typing. */

const savingAction = {
  type: "saving",
  payload: ["Apple", "Banana", "Strawberry"]
}
const savedAction = {
  type: "saved"
}
type Actions = typeof savingAction | typeof savedAction;

/* Using any means that we would not get any type checking. The correct syntax for extracting the type from an object is typeof objectName. */