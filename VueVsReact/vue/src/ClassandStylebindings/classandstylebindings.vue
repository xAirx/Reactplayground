<!-- Post.vue -->

<!--
Vue automatically binds class and style props to the outer HTML element of a component.

//Parent example
<post
  :title="About CSS"
  class="margin-bottom"
  style="color: red"
/>
-->

<template>
  <article>
    <h1>{{ title }}</h1>
  </article>
</template>

<script>
export default {
  props: ["title"],
};
</script>
