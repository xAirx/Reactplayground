<!--- Vue.js offers you watchers -- "more generic way to react
to data changes".

Vue does provide a more generic way to observe and react
to data changes on a Vue instance: watch properties.

When you have some data that needs to change based on some
other data, it is tempting to overuse watch -
especially if you are coming from an AngularJS background.

However, it is often a better idea to use a
computed property rather than an
imperative watch callback. Consider this example: --->

<template>
  <div>
    <h1>Watchers</h1>
  </div>
</template>

<script>
export default {
  watch: {
    name(valueAfterUpdate, valueBeforeUpdate) {
      // ...
    },
  },
};
</script>

<style></style>

<!-- AjaxToggle.vue -->

<template>
  <input type="checkbox" v-model="checked" />
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },

  watch: {
    checked(checked) {
      syncWithServer(checked);
    },
  },

  methods: {
    syncWithServer(checked) {
      // ...
    },
  },
};
</script>
