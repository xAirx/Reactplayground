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

<!--- How to Use Props

In Vue, we define props by adding the props option inside the object we export inside the script field like we did with the data option. It is a best practice to define the props as objects so we get more control over how they are used.

For example, specify their types, default values, and make them required if necessary. Vue will show a warning if you use the component wrong, like calling it without passing a required prop.

Let's say we have an Address child component that will be called from the UserInfo parent component. -->

<!--- Child Component (Address.vue) We can access our props just like our data
variables – using the double parenthesis inside the template. And we can pass
the props from the parent like this: -->

<template>
  <div class="address">
    <p>City: {{ city }}</p>
    <p>Street: {{ street }}</p>
    <p>House No: {{ houseNumber }}</p>
    <p>Postal Code: {{ postalCode }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    city: {
      type: String,
      default: "Munich",
    },
    street: {
      type: String,
      required: true,
    },
    houseNumber: {
      type: Number,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>

<!--- Parent Component (UserInfo.vue) -->

<template>
  <div class="address">
    <p>Name: Yigit</p>
    <Address
      street="randomStrasse"
      :postalCode="80999"
      :houseNumber="32"
    ></Address>
  </div>
</template>

<script>
import Address from "@/components/Address.vue";

export default {
  data() {
    return {};
  },
  components: {
    Address,
  },
};
</script>

<style></style>
