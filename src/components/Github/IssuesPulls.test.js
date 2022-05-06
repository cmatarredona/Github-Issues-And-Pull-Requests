import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import App from "../../App";
import store from "../../store";

describe("Github Issues & Pulls", () => {
  it("Repository not found", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = screen.getByText("Search");
    userEvent.click(button);
    expect("Not found").toBeInTheDocument;
  });

  it("Repository found", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const user = screen.getByLabelText("Username");
    const repo = screen.getByLabelText("Repository");
    const button = screen.getByText("Search");
    userEvent.type(user, "facebook");
    userEvent.type(repo, "react");
    userEvent.click(button);
    expect("Valid repository").toBeInTheDocument;
  });

  it("Issues found", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    localStorage.setItem("user", "facebook");
    localStorage.setItem("repository", "react");
    const button = screen.getByText("Issues");
    userEvent.click(button);
    expect("Not found").not.toBeInTheDocument;
  });

  it("Issues not found", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    localStorage.setItem("user", "facebuk");
    localStorage.setItem("repository", "reakt");
    const button = screen.getByText("Issues");
    userEvent.click(button);
    expect("Not found").toBeInTheDocument;
  });

  it("Pulls found", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    localStorage.setItem("user", "facebook");
    localStorage.setItem("repository", "react");
    const button = screen.getByText("Pull requests");
    userEvent.click(button);
    expect("Not found").not.toBeInTheDocument;
  });

  it("Pulls not found", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    localStorage.setItem("user", "facebuk");
    localStorage.setItem("repository", "reakt");
    const button = screen.getByText("Pull requests");
    userEvent.click(button);
    expect("Not found").toBeInTheDocument;
  });
});
