/* Form Validation overview

Now we need a library for Form validation, so we’re gonna add react-validation library to our project.
Run the command: npm install react-validation validator

To use react-validation in this example, you need to import following items:
 */

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";

/* We also use isEmail() function from validator to verify email.

This is how we put them in render() method with validations attribute:
 */
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

render() {
  return (
  ...
    <Form
      onSubmit={handleLogin}
      ref={form}
    >
      ...
      <Input
        type="text"
        className="form-control"
        ...
        validations={[required, email]}
      />

      <CheckButton
        style={{ display: "none" }}
        ref={checkBtn}
      />
    </Form>
  ...
  );
}

/* We’re gonna call Form validateAll() method to check validation functions in validations. Then CheckButton helps us to verify if the form validation is successful or not. So this button will not display on the form.
 */
form.validateAll();

if (checkBtn.context._errors.length === 0) {
  // do something when no error
}
/*
If you need Form Validation with React Hook Form 7, please visit:
React Form Validation with Hooks example */