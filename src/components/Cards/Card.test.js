import { render } from "@testing-library/react";
import Card from "./Card";
it("Render the 'Card' component", () => {
  render(<Card>Hello world!</Card>);
  expect("Hello world!").toMatchSnapshot();
});

