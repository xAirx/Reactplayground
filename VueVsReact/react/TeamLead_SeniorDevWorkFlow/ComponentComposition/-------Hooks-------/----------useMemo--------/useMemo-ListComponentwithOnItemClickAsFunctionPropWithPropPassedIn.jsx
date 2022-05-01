/* 3. A good use case



/* ParentComponent -
The list could be big, maybe hundreds of items.
To prevent useless list re - renderings, you wrap it into React.memo().
The parent component of MyBigList provides a handler function to know when an item is clicked: */

import { useCallback } from "react";
export function MyParent({ term }) {
  // we make sure we dont waste renders
  // by using useCallback here, we can avoid re-renders by checking the term prop
  // if that has not changed the onItemClick wont run.
  // this function is called from the child component.

  const onItemClick = useCallback(
    (event) => {
      console.log("You clicked ", event.currentTarget);
    },
    [term]
  );

  return <MyBigList term={term} onItemClick={onItemClick} />;
}

/* ChildComponent -
 Imagine you have a component that renders a big list of items: */

import useSearch from "./fetch-items";
function MyBigList({ term, onItemClick }) {
  // because the items list is so big its wise to memoize it.
  const items = useMemo(() => {
    useSearch(term);
  }, [term]);

  const map = (item) => <div onClick={onItemClick}>{item}</div>;

  return <div>{items.map(map)}</div>;
}

export default MyBigList;
