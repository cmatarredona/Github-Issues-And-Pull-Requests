import React from "react";
import ReactDOM from "react-dom";
import Card from "../Cards/Card";
import Backdrop from "./Backdrop";
import styles from "./Modal.module.css";
const ModalPlaceholder = ({ children, className }) => {
  const classes = `${className} ${styles.modal}`;
  return <Card className={classes}>{children}</Card>;
};
const Modal = ({ onClick, className, children }) => {
  return (
    <React.Fragment>
      <Backdrop onClose={onClick} />
      {ReactDOM.createPortal(
        <ModalPlaceholder className={className}>{children}</ModalPlaceholder>,
        document.getElementById("modal-container")
      )}
    </React.Fragment>
  );
};
export default Modal;
