<!--- In Vue we have a special directive for this operation called v-model.
To use this, you need to create a state by using the data property as we have learned before.
 Then you add the v-model keyword to your input and specify which data variable is responsible for
 storing this input (this is applicable to form input, textarea and select elements).

This is a high-level and clean way to connect data, removing the need to create
additional lambda functions or handlers. --->

<template>
  <div>
    <input v-model="inputState" type="text" />
    <br />
    {{ inputState }}
    <br />
    <button @click="changeInputState()">Click to say goodbye</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputState: "Hello",
    };
  },
  methods: {
    changeInputState: function () {
      this.inputState = "Goodbye";
    },
  },
};
</script>

<style></style>

<!----Here is a small example: we have a text input, and we connect it to the inputState variable by using the v-model keyword. So whenever the user inputs text, the inputState variable will reflect the changes automatically.

However, there is one special thing that you need to know: v-model implements 2-way data binding in contrast to 1-way binding in React.

This means that, not only when you change the input does the data change, but also, if you change the data, the input value changes as well.

To demonstrate this, I have created a button and connected it to a method. Don't worry about the event handling yet, we will see that in next section. When the button is clicked, the value of inputState variable is changed and the input also changes when that happens.

I encourage you to try it yourself by running the code. Also, notice that the initial value of your input box is 'Hello' – it is not initialized to empty string or null because we set the inputState variable to 'Hello'. -->

<template>
  <div>
    <input
      v-model="username"
      id="outlined-basic"
      label="Username"
      variant="outlined"
    />
    <input
      v-model="password"
      id="outlined-basic"
      type="password"
      label="Password"
      variant="outlined"
    />

    <input
      v-model="termsAccepted"
      id="outlined-basic"
      type="checkbox"
      label="Password"
      variant="outlined"
    />

    <Button variant="contained" color="primary" @click="submitForm">
      Submit
    </Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      termsAccepted: false,
    };
  },
  methods: {
    submitForm: function () {
      console.log(this.username, this.password, this.termsAccepted);
    },
  },
};
</script>

<style></style>
