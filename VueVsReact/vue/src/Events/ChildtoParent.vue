<!---/// Emit method Vue.js way In Vue.js,
child component notifies event with $emit
method to its parent.

Events are essentially callbacks that are called when something
happened in the child component. Vue sees events as a first-class
 citizen, so you can “listen” to them with @, which is shorthand
 for the v-on directive.
 --->

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
