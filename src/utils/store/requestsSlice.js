// Requests slice contains array 'requests(users objects)' that the loggedinUser got.

import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload; // updates the state
    },
    removeRequest: (state, action) => {
      // Remove the mentioned Connection Request by Id. i.e, after the request is accepted/rejected.
      const reqId = action.payload; // user passed requestId
      const newArray = state.filter((eachRequest) => eachRequest._id !== reqId);
      return newArray; // updates the state
    },
  },
});

export const { addRequests, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
