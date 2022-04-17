/* Omit
Omit<T> behaves similarly to Pick, but with the inverse effect.
We specify the keys of the parent type that we do not want in the returned type.
Generally I will reach for the one that requires passing the least number of keys as the second argument.
If we want to grab only a few of the keys from a parent type, reach for Pick. If there are fewer keys that we want to remove from the parent type, reach for Omit.
 Let's see how it works with the sample DataCardProps from before.
 */

interface Card {
  id: string;
  isFeatured?: boolean;
  name: string;
}

interface DataCardProps {
  cardData: Card[];
  handleSelect: (id: string) => void;
  titleText: string;
}

/*
 * Using Pick and Omit below allows both of these implementations to return
 * the exact same type. Depending on what we care about, one may be more
 * ergonomic or clear for the developer and surrounding code.
 */

type CardDataWithPick = Pick<DataCardProps, "cardData" | "titleText">;
type CardDataWithOmit = Omit<DataCardProps, "handleSelect">;

/* In a real world application, there may be substantially more data props that a component is expecting.
In that case, it may be more ergonomic to omit the business logic handled by the container component. Again, both Pick and Omit have inverse behavior of each other. Use whichever makes more sense for the given implementation at hand.

TypeScript utility types augment the flexibility of your existing types and allow the removal of some duplication of
types across different implementations. These three utility types are just the beginning of utility types provided out of the box from TypeScript.
In future posts, we will examine some of the other utility types at our disposal, and eventually how to create our own.
 */
