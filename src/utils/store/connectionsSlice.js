// Connections slice contains array 'connections(users objects)' of the logged in User.

import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload; // updates the state
    },
    removeConnections: (state, action) => {
      return null; // updates the state
    },
  },
});

export const { addConnections, removeConnections } = connectionsSlice.actions;
export default connectionsSlice.reducer;
