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

export const checkRepository = (user, repository, setIsLoading) => {
  return async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/repos/${user}/${repository}`
      );
      setIsLoading(false);
      const data = await response.json();
      const message = { ...data };
      if (!message.message) {
        localStorage.setItem("user", user);
        localStorage.setItem("repository", repository);
      }
      return message;
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchIssuesPage = (user, repository, page, setIsLoading) => {
  return async (dispatch) => {
    try {
      setIsLoading(true);
      const issuesData = await fetchData(user, repository, "issues", page);
      setIsLoading(false);
      dispatch(issuesActions.addIssues(issuesData));
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchIssueComments = (url, setIsLoading) => {
  return async (dispatch) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      dispatch(issuesActions.addComments(data));
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchPullsPage = (user, repository, page, setIsLoading) => {
  return async (dispatch) => {
    try {
      setIsLoading(true);
      const pullsData = await fetchData(user, repository, "pulls", page);
      setIsLoading(false);
      dispatch(pullRequestsActions.addPullRequests(pullsData));
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchPullsComments = (url, setIsLoading) => {
  return async (dispatch) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      dispatch(pullRequestsActions.addComments(data));
    } catch (error) {
      console.error(error);
    }
  };
};
