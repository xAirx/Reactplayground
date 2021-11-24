<!--- Conditional Styling

Conditional Styling means binding a class or style to an element if a condition is true.

In Vue it can be achieved like this: --->

<template>
  <div>
    <button @click="toggleApplyStyles"></button>
    <p :class="{ textStyle: stylesApplied }">
      Click the button to {{ stylesApplied ? "unstyle" : "style" }} me
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stylesApplied: false,
    };
  },
  methods: {
    toggleApplyStyles: function () {
      this.stylesApplied = !this.stylesApplied;
    },
  },
};
</script>

<style>
.textStyle {
  font-size: 25px;
  color: red;
  letter-spacing: 120%;
}
</style>

<!--- Vue Conditional Styling

We create a paragraph and want to apply the textStyle class only when the stylesApplied data

property's value is true. We can use v-bind to achieve this.

The colon is the shorthand for v-bind so :class is same as v-bind:class.

We use v-bind object syntax to bind classes.

We pass an object to the class property: {textStyle: stylesApplied}, which means apply the

textStyle class if stylesApplied is true.

It is a bit complicated at the start but it helps us avoid multiple chained

if statements to determine which class will be applied and handles style bindings

in a clean way: class names on the left (object keys), conditions on the right (object values). --->
