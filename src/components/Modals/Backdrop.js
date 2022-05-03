import React from "react";
import ReactDOM from "react-dom";
import styles from "./Backdrop.module.css";
const Backdrop = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={props.onClose} />,
        document.getElementById("modal-backdrop")
      )}
    </React.Fragment>
  );
};
export default Backdrop;
