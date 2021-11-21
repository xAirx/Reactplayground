<!-- AjaxForm.vue
Vue has a few modifiers like prevent and stop to change the way an event is
handled without touching it’s handler.
 -->

<template>
  <form @submit.prevent="submitWithAjax">
    <!-- ... -->
  </form>
</template>

<script>
export default {
  methods: {
    submitWithAjax() {
      // ...
    },
  },
};
</script>
