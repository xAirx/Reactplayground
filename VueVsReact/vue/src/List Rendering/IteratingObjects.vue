<!--  Vue allows you to use the same v-for directive for keys & values.
 -->
<template>
  <ul>
    <li v-for="(value, key) in object" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>

<script>
export default {
  props: ["object"], // E.g. { a: 'Foo', b: 'Bar' }
};
</script>
