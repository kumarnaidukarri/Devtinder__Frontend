// Redux Store
import { configureStore } from "@reduxjs/toolkit";

// Slices
import userReducer from "./userSlice.js";

const appStore = configureStore({ reducer: { user: userReducer } }); // it creates a store with given Slices
/*
configureStore({
   reducer : {
      sliceName: someSliceReducer,
      anotherSlice: anotherReducer,
   }
})
*/
export default appStore;

// Redux, Toolkit installation: npm install react-redux @reduxjs/toolkit

// store state looks like:
/*
store.getState();
{
  sidebarMenu: { ... }, // state from sidebarMenuReducer
  search: { ... },      // state from searchSliceReducer
  chat: { ... }         // state from chatSliceReducer
}
*/

// REDUX Explain
/*
1. Store(Global State)      :- A big JavaScript object that holds all app data.

2. Reducers(State Updaters) :- 'Pure Functions' that decide how the state changes based on an Action.
   they receive (state, action) and must return a new state.
   ex: let cacheResults = (state, action) => { return ({..state, ...action.payload}) }

3. Actions
   Actions triggers the Reducers to run.
   i) Action Creator: a function that creates and returns an 'Action' object.
      syntax: reducer(obj)
      ex:     cacheResults(payload)
   ii) Action Object:  a plain js object that describes what happened. ex: { type, payload }
       ex: { type: "search/cacheResults", payload: {iphone: ["iphone 11"]} }

   * -> Redux receives the Action, sends it to Reducers, reducers update the Store.

4. useSelector() :- hook to 'read data' from the Redux Store.
   the component will re-render automatically when the selected data changes.
   i.e, our component Subscribed to Slice of Store.
   ex: let searchCache = useSelector(store => store.search);
   Note: Subscribe only to the required Slice Part of Store.
         Don't Subscribe Entire Store at once. when any small state changes in store causes the components re-render.

5. useDispatch() :- hook to send Actions to the Redux Store.
   used to write/update data in Redux.
   it tells Redux to run a reducer. => dispatch(action).
   Redux calls the reducer → updates the State → components will re-render.
   ex: dispatch(cacheResults( {iphone:["iphone 11"]} ));

* Redux Flow :-
  dispatch(action) → Redux sends action to reducer → reducer returns new state → store updates → UI re-renders
*/
