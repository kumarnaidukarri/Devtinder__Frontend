// User slice contains user data.
import { createSlice } from "@reduxjs/toolkit";

// creates a slice with config obj.
// it returns an object = {name:'user', actions:{a1:f,a2:f,...}, reducer:f}
// Export those Actions and Reducers

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // updates the state
      // 'payload' holds 'argument value', that we pass during Dispatching an Action call.
      //  i.e, dispatch(addUser("Ram"))  ----> action.payload = "Ram"
    },
    removeUser: (state, action) => {
      return null; // updates the state
    },
  },
});

// Export using redux default syntax
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

/*
    name     -> name of slice
    initialState -> initial data
    reducers -> write 'reducer functions' corresponding to 'each Action'
                { action1Name : reducerFunc(), act2 : reducerFunc(), ... }
                "reducer function" gets 2 parameters - state and action.
                 those reducer functions will modify our initial state.
    Export those "Actions" and "Reducer" using Redux default syntax.
  */

// * Redux Flow Summary :-
// Component ➜ dispatch(action) ➜ reducer updates store ➜ components re-render
