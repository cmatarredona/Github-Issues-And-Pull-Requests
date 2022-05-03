import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssuesPage } from "../../../store/issues-pull-actions";
import Issue from "./Issue";
import Pagination from "../../Pagination/Pagination";
import styles from "./GithubIssues.module.css";

var message="No issues found";
const GithubIssues = ({ user, repo }) => {
  const issues = useSelector((state) => state.issues.items || []);
  const [page, setPage] = useState(1);
  const pageChangeHandler = (page) => {
    setPage(page - 1);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIssuesPage(user, repo, page + 1));
  }, [page, dispatch, user, repo]);

  //Filtro para que no se muestre 2 veces seguidas el mismo issue.
  var showIssues = [];
  if (!issues.message) {
    var prevId;
    showIssues = issues.filter((issue) => {
      if (issue.issue.state === "open" && prevId !== issue.issue.id) {
        prevId = issue.issue.id;
        return issue;
      }
      return null;
    });
  }else{
    message=issues.message;
  }

  return (
    <div className={styles.content}>
      {showIssues.length > 0 ? (
        <ul className={styles.list}>
          {showIssues.map((issue) => (
            <Issue key={issue.id} issue={issue} />
          ))}
        </ul>
      ) : (
        <h3 className={styles.noFound}>{message}</h3>
      )}
      <Pagination onChange={pageChangeHandler} actualPage={1} />
    </div>
  );
};

export default GithubIssues;
