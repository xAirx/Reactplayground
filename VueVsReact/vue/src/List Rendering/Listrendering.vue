<!-- Recipe.vue

 Rendering Arrays (Lists)

Now let's see how we can render list data. In Vue, there is v-for keyword for doing this.
The syntax name in names means the name variable will always hold the current name. As the index changes,
 if index is 0, it is names[0] and so on. We can also access the index as specifying it inside the
 parentheses. The v-for directive also requires a key.  -->

<template>
  <ul>
    <li v-for="(ingredient, index) in ingredients" :key="index">
      {{ ingredient }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["ingredients"],
};
</script>

<!--- Example 2  --->

<template>
  <div>
    <h1>Names</h1>
    <ul>
      <li v-for="(person, index) in people" :key="index">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          id: 0,
          name: "Yigit",
        },
        {
          id: 1,
          name: "Gulbike",
        },
        {
          id: 2,
          name: "Mete",
        },
        {
          id: 3,
          name: "Jason",
        },
        {
          id: 4,
          name: "Matt",
        },
        {
          id: 5,
          name: "Corey",
        },
      ],
    };
  },
};
</script>
