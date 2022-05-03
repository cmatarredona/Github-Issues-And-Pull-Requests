import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GithubIssues from "./components/Github/Issues/GithubIssues";
import GithubPullRequests from "./components/Github/Pulls/GithubPullRequests";
import Header from "./components/Header/Header";


function App() {
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState("");
  const localUser = localStorage.getItem("user");
  const localRepo = localStorage.getItem("repository");
  const updateUserAndRepo = (user, repo) => {
    setUser(user);
    setRepo(repo);
  };
  return (
    <BrowserRouter>
      <Header onSubmitForm={updateUserAndRepo} />
      <Routes>
        <Route path="/" />
        {localUser &&
          localUser.trim() !== "" &&
          localRepo &&
          localRepo.trim() !== "" && (
            <React.Fragment>
              <Route
                path="issues"
                element={<GithubIssues user={localUser} repo={localRepo} />}
              />
              <Route
                path="pulls"
                element={
                  <GithubPullRequests user={localUser} repo={localRepo} />
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
