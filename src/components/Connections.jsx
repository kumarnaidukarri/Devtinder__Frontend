// Connections.jsx component contains 'all connections' of the user.
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// my components
import { BASE_URL } from "../utils/constants.js";
import { addConnections } from "../utils/store/connectionsSlice.js"; // Action from 'Connections Slice' of Redux store

const Connections = () => {
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      }); // API call
      const connectionsUsersArr = res?.data?.data; // [user1Obj, u2, u3 ]

      dispatch(addConnections(connectionsUsersArr)); // dispatch an action - updates the 'connection slice' of redux store
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []); // runs only once. after initial first render

  return <div>Connections Page</div>;
};

export default Connections;
