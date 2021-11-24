<!--Vue uses v-if, v-else and v-else-if directives to conditionally render parts of a template. -->

<!--- Conditional Rendering

Sometimes, we want to render a component after some operation – such as fetching data from an API –
is completed. Or maybe we want to display an error message if there is an error or success message if not.

For such situations, we use conditional rendering to change the HTML to be rendered programmatically.

In Vue, there are special directives for that as well.
We can use the v-if and v-else or even v-else-if for rendering templates based on conditions. -->

<template>
  <article>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Vue is not awesome!</h1>
    <h1 v-else-if="awesome">Vue is awesome!</h1>
  </article>
</template>

<script>
export default {
  props: ["awesome"],
};
</script>

<!--- Example 2 ---->

<template>
  <div>
    <h2 v-if="condition1">condition1 is true</h2>
    <h2 v-else-if="condition2">condition2 is true</h2>
    <h2 v-else>all conditions are false</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition1: false,
      condition2: false,
    };
  },
};
</script>

<style></style>
