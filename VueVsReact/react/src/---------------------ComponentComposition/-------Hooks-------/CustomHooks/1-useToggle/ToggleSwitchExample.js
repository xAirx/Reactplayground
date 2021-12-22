import React, { useState } from "react";

//app.js
function onToggleChange(event) {
  console.log(event.target.checked);
}

<div>
  <ToggleSwitch
    id="id"
    name="name"
    defaultChecked={false}
    disabled={false}
    Text={["Yes", "No"]}
    onToggleChange={onToggleChange}
  />
</div>;

function ToggleSwitch({
  toggleChange,
  defaultChecked,
  Text,
  disabled,
  id,
  name,
}) {
  const [value, toggleValue] = useToggle(defaultChecked);
  /*
  const [checked, setChecked] = useState(props.defaultChecked); */

  const [Text] = useState(Text);

  function onChange(e) {
    toggleValue(e.target.value);
    // console log the value .....
    if (toggleChange) onToggleChange(e);
  }

  return (
    <div className={"toggle toggle-switch"}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        defaultChecked={value}
        onChange={onChange}
      />
      {id ? (
        <label className="toggle-switch-label" htmlFor={id}>
          <span
            className={
              disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            data-yes={Text[0]}
            data-no={Text[1]}
          />
          <span
            className={
              disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
            }
          />
        </label>
      ) : null}
    </div>
  );
}

export default ToggleSwitch;
