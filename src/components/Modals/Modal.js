import React from "react";
import ReactDOM from "react-dom";
import Card from "../Cards/Card";
import Comments from "../Github/Comments/Comments";
import Backdrop from "./Backdrop";
import styles from "./Modal.module.css";
const ModalPlaceholder = ({ onClose, title, description, comments }) => {
  return (
    <Card className={styles.modal}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <Comments comments={comments} />
      </div>
    </Card>
  );
};
const Modal = ({ onClick, title, description, comments }) => {
  return (
    <React.Fragment>
      <Backdrop onClose={onClick} />
      {ReactDOM.createPortal(
        <ModalPlaceholder
          title={title}
          description={description}
          comments={comments}
          onClose={onClick}
        />,
        document.getElementById("modal-container")
      )}
    </React.Fragment>
  );
};
export default Modal;
