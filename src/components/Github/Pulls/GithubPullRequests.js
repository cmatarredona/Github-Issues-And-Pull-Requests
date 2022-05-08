import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPullsPage } from "../../../store/issues-pull-actions";
import Pagination from "../../Pagination/Pagination";
import Spinner from "../../Spinner/Spinner";
import styles from "./GithubPullRequests.module.css";
import Pull from "./Pull";

var message = "No pulls found";
const GithubPullRequests = ({ user, repo }) => {
  const pulls = useSelector((state) => state.pullRequests.items || []);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageChangeHandler = (page) => {
    setPage(page);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPullsPage(user, repo, page, setIsLoading));
  }, [page, dispatch, user, repo]);
  if (pulls.message) {
    message = pulls.message;
  }

  return (
    <div className={styles.content}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          {pulls.length > 0 ? (
            <ul className={styles.list}>
              {pulls.map((pull) => (
                <Pull key={pull.id} pull={pull} />
              ))}
            </ul>
          ) : (
            <h3 className={styles.noFound}>{message}</h3>
          )}
          <Pagination onChange={pageChangeHandler} actualPage={1} />
        </>
      )}
    </div>
  );
};

export default GithubPullRequests;
