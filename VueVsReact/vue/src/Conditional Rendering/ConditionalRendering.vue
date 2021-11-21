<!--Vue uses v-if, v-else and v-else-if directives to conditionally render parts of a template. -->

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
