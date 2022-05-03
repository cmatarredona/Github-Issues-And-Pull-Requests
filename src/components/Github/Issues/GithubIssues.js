import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssuesPage } from "../../../store/issues-pull-actions";
import Issue from "./Issue";
import Pagination from "../../Pagination/Pagination";
import styles from "./GithubIssues.module.css";

const GithubIssues = ({ user, repo }) => {
  const issues = useSelector((state) => state.issues.items || []);
  const [page, setPage] = useState(1);
  const pageChangeHandler = (page) => {
    setPage(page - 1);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIssuesPage(user, repo, page + 1));
  }, [page]);

  //Filtro para que solo se muestre el primer item que encuentre con un id
  var prevId;
  const showIssues = issues.filter((issue) => {
    if (issue.issue.state === "open" && prevId !== issue.issue.id) {
      prevId = issue.issue.id;
      return issue;
    }
  });
  return (
    <div className={styles.content}>
      {showIssues.length > 0 ? (
        <ul className={styles.list}>
          {showIssues.map((issue) => (
            <Issue key={issue.id} issue={issue} />
          ))}
        </ul>
      ) : (
        <h3 className={styles.noFound}>No issues found</h3>
      )}
      <Pagination onChange={pageChangeHandler} actualPage={1} />
    </div>
  );
};

export default GithubIssues;
