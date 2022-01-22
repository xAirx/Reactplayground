import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onclick={props.onConfirm} />;
};

const ModalOverlay = ({ onConfirm, title, message }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  <>
    {ReactDOM.createPortal(
      <BackDrop onConfirm={props.onConfirm} />,
      document.getElementById("backdrop-root")
    )}
    {ReactDOM.createPortal(
      <ModalOverlay
        title={props.title}
        onConfirm={props.onConfirm}
        message={props.Message}
      />,
      document.getElementById("overlay-root")
    )}
  </>;
};

export default ErrorModal;
