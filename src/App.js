import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GithubIssues from "./components/Github/Issues/GithubIssues";
import GithubPullRequests from "./components/Github/Pulls/GithubPullRequests";
import Header from "./components/Header/Header";


function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [repo, setRepo] = useState(localStorage.getItem("repository"));
  const updateUserAndRepo = (user, repo) => {
    setUser(user);
    setRepo(repo);
  };
  return (
    <BrowserRouter>
      <Header onSubmitForm={updateUserAndRepo} />
      <Routes>
        <Route path="/" />
        {user &&
          user.trim() !== "" &&
          repo &&
          repo.trim() !== "" && (
            <React.Fragment>
              <Route
                path="issues"
                element={<GithubIssues user={user} repo={repo} />}
              />
              <Route
                path="pulls"
                element={
                  <GithubPullRequests user={user} repo={repo} />
                }
              />
            </React.Fragment>
          )}
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
