<!--- Vue.js way

In Vue.js, ref gives you direct access to the DOM. --->

<template>
  <div>
    <div ref="foo">...</div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(this.$refs.foo);
    },
  },
};
</script>
