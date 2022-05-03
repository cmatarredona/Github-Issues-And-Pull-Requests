import { configureStore } from "@reduxjs/toolkit";
import issues from "./issues";
import pullRequests from "./pullRequests";

const store = configureStore({
  reducer: {
    issues: issues,
    pullRequests: pullRequests,
  },
});

export default store;