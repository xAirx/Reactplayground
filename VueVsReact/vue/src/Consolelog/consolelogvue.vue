<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Consolelog",
  data() {
    return {
      title: "Consolelog",
      message: "This is the Consolelog component",
    };
  },
  methods: {
    logMessage() {
      console.log(this.message);
    },
  },
};
</script>

<style></style>
