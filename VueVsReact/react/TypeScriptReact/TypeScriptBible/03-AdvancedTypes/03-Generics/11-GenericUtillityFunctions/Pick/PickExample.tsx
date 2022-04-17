/* Pick
Pick<T> enables us to specify a pointed subset of a given type,
by declaring which keys of the parent type we want brought into to the returned type.
This gives us a selected subset of the parent type, and can be useful when we know we want some of the keys from a parent type, but not others.
Where Partial makes everything optional and does not allow us to enforce the presence of any keys,
Pick pulls out only the keys we care about, maintaining their optional or required status.
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
 * Let's say we have an intermediary component which handles the logic,
 * but still receives the cardData from another source. The return type will be:
 * {
 *   cardData: Card[]
 * }
 */

type CardData = Pick<DataCardProps, "cardData">;

/*
 * We can also pull multiple keys off a parent type by using a union string
 * as the second argument. The return type below will be:
 * {
 *   cardData: Card[]
 *   titleText: string
 * }
 */

type CardDataWithTitle = Pick<DataCardProps, "cardData" | "titleText">;

/* Pick is great when we want to inherit specific keys and their types from a parent object.
Using this utility enables us to avoid redeclaring those same keys across multiple implementations, resulting in DRYer types overall. */
