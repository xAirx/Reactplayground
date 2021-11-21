<template>
  <Child :name="test" :item="sampleData" />
</template>

<script>
function Item(one, two) {
  return { one: one, two: two };
}

export default {
  component: {
    child,
  },
  // validate its value with "type" and "required".
  props: {
    name: {
      type: String,
      required: false,
      default: "John Doe",
    },
    item: {
      type: Item,
      required: true,
    },
  },
};
</script>
