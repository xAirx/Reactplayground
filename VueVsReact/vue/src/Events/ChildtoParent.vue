<!---/// Emit method Vue.js way In Vue.js,
child component notifies event with $emit
method to its parent. --->

<template>
  <div>
    <Child @hello="handleSomethingHappened" />
  </div>
</template>

<script>
export default {
  compoenents: {
    Child,
  },
  methods: {
    onSomethingHappened() {
      this.$emit("hello");
    },
  },
};
</script>

<style lang="scss" scoped></style>

<!---///// Parent
Then, register a handler for a notified event with @ syntax.-->

<template></template>

<script>
export default {
  methods: {
    handleSomethingHappened() {
      console.log("test");
    },
  },
};
</script>

<style lang="scss" scoped></style>
