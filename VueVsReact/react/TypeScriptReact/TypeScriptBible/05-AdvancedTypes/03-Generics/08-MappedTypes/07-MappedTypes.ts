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