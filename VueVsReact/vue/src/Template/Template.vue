<!-- Vue uses HTML strings with some custom directives for templating.

They recommend using .vue files to seperate the templates and script
(and optionally styles).

In Vue, a Single File Component contains 3 parts: the template, script and style.

The template is the part that will be rendered. It contains the HTML of the component and has access to the data (and methods) in the scripts and the styles.

You can find everything about a component inside these sections in Vue.

To get this component rendered without a router or other complicated things, you can add it to App.vue.


Vue component's <template> has its own syntax such as v-bind, v-for, v-if.
 -->
<template>
  <div>
    <h1>Hello, {{ name }} !</h1>
    <a :href="link">Click me</a>
    <ul>
      <li v-for="item in items" :key="item.key">
        {{ item.title }}
      </li>
    </ul>
    <p v-if="isActive">Paragraph</p>
    <p v-show="isShow">Second paragraph</p>
  </div>
</template>

<script>
export default {};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style></style>
