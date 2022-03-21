/* Nested Objects and Arrays
To updated nested objects and arrays, each level needs to be copied and updated immutably as with the above examples.
 */

const [people, setPeople] = useState({
  jerry: {
    firstName: "Jerry",
    lastName: "Garcia",
    address: {
      street: "710 Ashbury Street",
      city: "San Francisco",
      state: "CA",
      zip: "94117",
    },
  },
  jim: {
    firstName: "Jim",
    lastName: "Morrison",
    address: {
      street: "8021 Rothdell Trail",
      city: "Los Angeles",
      state: "CA",
      zip: "90046",
    },
  },
});

// Jerry is gonna move next door
setPeople({
  // Copy people
  ...people,
  // Overwrite person you want to update
  jerry: {
    // Copy Jerry's existing properties
    ...people.jerry,
    // Overwrite Jerry's address
    address: {
      // Copy everything over from Jerry's original address
      ...people.jerry.address,
      // Update the street
      street: "712 Ashbury Street",
    },
  },
});
