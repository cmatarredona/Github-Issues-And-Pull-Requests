import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPullsComments } from "../../../store/issues-pull-actions";
import Modal from "../../Modals/Modal";
import Spinner from "../../Spinner/Spinner";
import Comments from "../Comments/Comments";
import styles from "../issue-pull.module.css";
const messageIcon = (
  <svg
    aria-hidden="true"
    height="16"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    data-view-component="true"
    className="octicon octicon-comment v-align-middle"
  >
    <path
      fillRule="evenodd"
      d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
    ></path>
  </svg>
);
const Pull = ({ pull }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const comments = useSelector((state) => state.pullRequests.comments || []);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!showModal) {
      dispatch(fetchPullsComments(pull.comments_url, setIsLoading));
    }
    setShowModal((show) => !show);
  };
  const date = new Date(pull.created_at);
  return (
    <React.Fragment>
      {showModal && (
        <Modal onClick={handleClick}>
          <div>
            <h1>{pull.title}</h1>
            <p>{pull.body}</p>
          </div>
          <div>
            {isLoading ? (
              <Spinner />
            ) : (
              <Comments comments={comments} />
            )}
          </div>
        </Modal>
      )}
      <li onClick={handleClick}>
        <div className={styles.contentHeader}>
          <div>
            <h4>{pull.title}</h4>
            <div className={styles.labels}>
              {pull.labels.map((label) => (
                <small
                  className={styles.label}
                  key={label.id}
                  style={{ backgroundColor: "#" + label.color }}
                >
                  {label.name}
                </small>
              ))}
            </div>
          </div>
          <span>{messageIcon}</span>
        </div>
        <div>
          <small className={styles.contentInfo}>
            Created at {date.toLocaleDateString()} by
            <span className={styles.autor}> {pull.user.login}</span>
          </small>
        </div>
      </li>
    </React.Fragment>
  );
};
export default Pull;
