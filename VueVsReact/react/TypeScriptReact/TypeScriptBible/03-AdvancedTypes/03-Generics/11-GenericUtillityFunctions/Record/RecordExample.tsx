/* Record
Record<K, T> is the first utility type we have covered that takes two generic types.
This utility generates a type with the properties present in K with the corresponding values of type T.
This utility can be helpful in create type objects from union strings, or even generic polymorphic types. */

interface Dropdown {
  label: string;
  value: string;
}

type FilterCategories = "region" | "pricePoint" | "sortBy";

/*
 * The corresponding type will utilize the union string as the keys
 * with an array of Dropdowns as the value type.
 * {
 *   region: Dropdown[]
 *   pricePoint: Dropdown[]
 *   sortBy: Dropdown[]
 * }
 *
 * Note that this is the primary way to convert a union string to keys of a type.
 * The following approach would throw a compilation error.
 * type FilterGroups = {
 *   [key: keyof FilterCategories]: Dropdown[]
 * }
 */

type FilterGroups = Record<FilterCategories, Dropdown[]>;

/*
 * We can also create types with an unknown number of keys, but whose
 * values must be of a specified type. The following would allow this to be
 * a valid implementation of the type.
 *
 * {
 *   region: Dropdown[]
 *   pricePoint: Dropdown[]
 *   color: Dropdown[]
 * }
 */

type BroadFilters = Record<string, Dropdown[]>;

/* Record is a very flexible utility type and can eliminate a lot of duplication if you already have keys stored in a union string
and want to convert them to properties on a type.
It is also incredibly helpful when all of the keys on a type may not be known in advance, such as more generic objects. */
