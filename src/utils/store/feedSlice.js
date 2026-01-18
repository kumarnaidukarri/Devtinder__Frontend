// Feed slice contains Feed data.

import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload; // updates the state
    },
    removeUserFromFeed: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload); // action.payload = user sended "ID". i.e, user to remove from feed
      return newFeed; // updates the state
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
