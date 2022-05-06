import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../../App";
import store from "../../store";
describe("Header", () => {
  it("Render the title 'Github searchs'", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headerTitle = screen.getByText("Github searchs");
    expect(headerTitle).toBeInTheDocument;
  });

  it("Render the search form", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const user = screen.getByLabelText("Username");
    const repo = screen.getByLabelText("Repository");
    const button = screen.getByText("Search");
    expect(user && repo && button).toBeInTheDocument;
  });

  it("Render the nav menu", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const issue = screen.getByText("Issues");
    const pull = screen.getByText("Pull requests");
    expect(issue && pull).toBeInTheDocument;
  });
});
