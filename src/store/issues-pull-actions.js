import { issuesActions } from "./issues";
import { pullRequestsActions } from "./pullRequests";

const fetchData = async (user, repository, action, page = 1) => {
  var url;
  if (action === "issues")
    url = `https://api.github.com/repos/${user}/${repository}/issues/events?page=${page}`;
  if (action === "pulls")
    url = `https://api.github.com/repos/${user}/${repository}/pulls?page=${page}`;
  localStorage.setItem("user", user);
  localStorage.setItem("repository", repository);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchAllData = (user, repository) => {
  return async (dispatch) => {
    try {
      /* const issuesData = await fetchData(user, repository, "issues");
      const pullsData = await fetchData(user, repository, "pulls");
      dispatch(issuesActions.addIssues(issuesData));
      dispatch(pullRequestsActions.addPullRequests(pullsData)); */

      //Check if the repository exists
      const response = await fetch(
        `https://api.github.com/repos/${user}/${repository}`
      );
      const data = await response.json();
      const message = { ...data };
      if (!message.message) {
        console.log(message);
        localStorage.setItem("user", user);
        localStorage.setItem("repository", repository);
      }
      return message;
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchIssuesPage = (user, repository, page) => {
  return async (dispatch) => {
    try {
      console.log("fetchIssuesPage", user, repository, page);
      const issuesData = await fetchData(user, repository, "issues", page);
      dispatch(issuesActions.addIssues(issuesData));
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchIssueComments = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(issuesActions.addComments(data));
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchPullsPage = (user, repository, page) => {
  return async (dispatch) => {
    try {
      const pullsData = await fetchData(user, repository, "pulls", page);
      dispatch(pullRequestsActions.addPullRequests(pullsData));
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchPullsComments = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(pullRequestsActions.addComments(data));
    } catch (error) {
      console.error(error);
    }
  };
};
