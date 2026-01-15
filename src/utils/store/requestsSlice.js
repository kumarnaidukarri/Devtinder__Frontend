// Requests slice contains array 'requests(users objects)' that the loggedinUser got.

import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload; // updates the state
    },
  },
});

export const { addRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
