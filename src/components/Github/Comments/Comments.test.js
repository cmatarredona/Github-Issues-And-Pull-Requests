import { render } from "@testing-library/react";
import DUMMY_COMMENTS from "./DummyComments.json";
import Comments from "./Comments";
import Comment from "./Comment";

describe("Comments", () => {
  it("Render the 'Comments' component", () => {
    render(<Comments comments={DUMMY_COMMENTS} />);
    expect(DUMMY_COMMENTS.map((comment) => comment.body)).toBeInTheDocument;
  });
  it("Render 'No comments found' if there are no comments", () => {
    render(<Comments comments={[]} />);
    expect("No comments found").toBeInTheDocument;
  });
  it("Render a single 'Comment", () => {
    render(<Comment comment={DUMMY_COMMENTS[0]} />);
    expect(DUMMY_COMMENTS[0].body).toBeInTheDocument;
  });
});
