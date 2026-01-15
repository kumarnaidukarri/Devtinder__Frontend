// Requests component contains 'all connection requests' that the  loggedinuser got.
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// my components
import { BASE_URL } from "../utils/constants.js";
import { addRequests } from "../utils/store/requestsSlice.js"; // Action from 'Requests Slice' of Redux Store

const Requests = () => {
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      }); // API call
      const requestsArr = res?.data?.data; // [{_id:"616",fromUserId:{details},toUserId:"",status},  u2,  u3,  ...]

      dispatch(addRequests(requestsArr)); // Dispatch an action - updates the 'requests slice' of redux store
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []); // runs only once on initial render

  return <div>Requests Page</div>;
};

export default Requests;
