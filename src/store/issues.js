import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], comments: [] };
const issuesSlice = createSlice({
  name: "issues",
  initialState: initialState,
  reducers: {
    addIssues: (state, action) => {
      state.items = action.payload;
    },
    addSingleIssue: (state, action) => {
      state.items.push(action.payload);
    },
    addComments: (state, action) => {
      state.comments=action.payload;
    },
  },
});
export const issuesActions = issuesSlice.actions;
export default issuesSlice.reducer;
