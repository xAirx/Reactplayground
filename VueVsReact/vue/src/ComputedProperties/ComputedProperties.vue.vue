<!--- Vue.js has "computed properties". -->
<!---Vue has computed properties for two reasons:
to avoid mixing logic and markup in templates,
and to cache complex computations in a component instance. --->

<template>
  <div>
    <h1>Computed Properties</h1>
    <p>
      <br />
      <br />
      <span>{{ firstName }}</span>
      <span>{{ lastName }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>

<style></style>

<!---Computed properties are functions that capture the results of
computation, and caches them
and behave like properties in the template block. --->
