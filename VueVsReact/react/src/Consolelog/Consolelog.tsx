import React from "react";

export default function Consolelog() {
  const test = () => {
    console.log("test");
  };
  return (
    <div>
      <p> Console log test </p>
      {console.log(test)}
    </div>
  );
}
