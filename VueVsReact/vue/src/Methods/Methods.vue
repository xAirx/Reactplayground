<!--- Vue.js way Inside of methods defined in methods, you can reference states
(data). And the methods can be referenced inside your template. -->

<script>
export default {
  methods: {
    sayHello() {
      console.log(`Hello, ${this.name}!`);
    },
  },
};
</script>
