import React, { useState } from "react";

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        class="inputclass"
      />
    </>
  );
}
export default FormInput;

/*<FormInput type={"text"} onChange={handleChange} />
 <FormInput type={"email"} onChange={handleChange} /> */
