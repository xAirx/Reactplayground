import React, { useState } from "react";

function onSelectChange(event) {
  console.log(event.target.value);
}

function CustomSelect(props) {
  const [data] = useState(props.data);
  const [selectedData, updateSelectedData] = useState("");

  function handleChange(event) {
    updateSelectedData(event.target.value);
    // console.log data out
  }

  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <select
      name="customSearch"
      className="custom-search-select"
      onChange={handleChange}
    >
      <option>Select Item</option>
      {options}
    </select>
  );
}

export default CustomSelect;

<CustomSelect data={data} onSelectChange={onSelectChange} />;
