import React, { useState, useEffect } from "react";

<Modal show={true} message={"Hello"}>
  <p>THIS IS IT</p>
</Modal>;

function Modal(props) {
  const [message] = useState(props.message);
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    //Cleanup
  });

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">{message}</section>
    </div>
  );
}

export default Modal;
