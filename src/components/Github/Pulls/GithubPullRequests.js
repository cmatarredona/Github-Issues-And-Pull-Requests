import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPullsPage } from "../../../store/issues-pull-actions";
import Pagination from "../../Pagination/Pagination";
import styles from "./GithubPullRequests.module.css";
import Pull from "./Pull";

const GithubPullRequests = ({ user, repo }) => {
  const pulls = useSelector((state) => state.pullRequests.items || []);
  const [page, setPage] = useState(1);
  const pageChangeHandler = (page) => {
    setPage(page);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPullsPage(user, repo, page));
  }, [page]);

  //Filtro para que solo se muestre el primer item que encuentre con un id
  var showPulls = [];
  if (pulls.length > 0) {
    var prevId;
    showPulls = pulls.filter((pull) => {
      if (pull.state === "open" && prevId !== pull.id) {
        prevId = pull.id;
        return pull;
      }
    });
  }

  return (
    <div className={styles.content}>
      {showPulls.length > 0 ? (
        <ul className={styles.list}>
          {showPulls.map((pull) => (
            <Pull key={pull.id} pull={pull} />
          ))}
        </ul>
      ) : (
        <h3 className={styles.noFound}>No pulls found</h3>
      )}
      <Pagination onChange={pageChangeHandler} actualPage={1} />
    </div>
  );
};

export default GithubPullRequests;
