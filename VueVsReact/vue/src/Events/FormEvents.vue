<!-- Vue.js way In Vue.js,
events are represented by @ syntax (sugar for v-on).
Two way binding -->
<template>
  <div>
    <button @click="handleClick">Click me</button>

    <form @submit.prevent="handleSubmit">...</form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
