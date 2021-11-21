<!--
In Vue, we learned that the script tag contains the data and methods related to the component. The Vue Options API has special keywords (options) such as data, methods, props, computed, watch, and mixins that we can use, as well as lifecycle methods such as created and mounted.

We will use the data option to use state in our component. The data should be defined as a function which returns an object that contains our states.

To access the state inside our HTML (template), we have to use double curly braces and write the name of our variable. Keep in mind that any change to data variables will result in a render if that variable is used (referenced) in the HTML.
-->

<template>
  <div>
    <h1>Hello {{ currentFramework }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFramework: " Vue!",
      alternative: " React!",
    };
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style></style>
