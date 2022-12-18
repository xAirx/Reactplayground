import { useEffect, useState } from "react";

/** Return true if `t1` and `t2` are the same. */
export type Comparator<T> = (t1: T, t2: T) => boolean;

export type HasChanged<T = any> = [T, T, Comparator<T>?];

const flatten = (arr: any[][]) => arr.reduce((arr, el) => [...arr, ...el]);

const removeNonPrimities = (arr: any[]) =>
  arr.filter((a) => typeof a !== "function");

/**
 * Flatten input pair array and remove functions to get an array of dependencies
 * for a React Hook.
 */
const getDependencies = (arr: HasChanged[]) => removeNonPrimities(flatten(arr));

const isSame: Comparator<any> = (t1, t2) => t1 === t2;

/**
 * Hook for getting a boolean variable which indicates if specified pairs
 * have changed. An optional third comparator function can be provided to
 * be used when comparing the pair.
 */
const useHasChanged = (els: HasChanged[]) => {
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    setHasChanged(els.some(([t1, t2, comp = isSame]) => !comp(t1, t2)));
  }, getDependencies(els));

  return hasChanged;
};

export default useHasChanged;
