import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], comments: [] };

const pullRequests = createSlice({
  name: "pullRequests",
  initialState: initialState,
  reducers: {
    addPullRequests: (state, action) => {
      state.items = action.payload;
    },
    addSinglePullRequest: (state, action) => {
      state.items.push(action.payload);
    },
    addComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const pullRequestsActions = pullRequests.actions;
export default pullRequests.reducer;
