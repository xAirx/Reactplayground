import React, { useState } from "react";

function Button({ type, size, variant, children }) {
  const [size] = useState(size);
  const [variant] = useState(variant);

  return (
    <button type={type} className={`btn-${variant} btn-${size}`}>
      {children}
    </button>
  );
}

export default Button;
