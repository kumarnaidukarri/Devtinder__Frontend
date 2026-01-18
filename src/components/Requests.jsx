// Requests component contains 'all connection requests' that the  loggedinuser got.
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// my components
import { BASE_URL } from "../utils/constants.js";
import { addRequests, removeRequest } from "../utils/store/requestsSlice.js"; // Actions from 'Requests Slice' of Redux Store

const Requests = () => {
  const dispatch = useDispatch();
  const requestsArr = useSelector((appStore) => appStore.requests); // Subscribes to the 'Requests' Slice of Redux Store

  // Event handler
  const reviewRequest = async (status, _id) => {
    try {
      /* status = 'accepted' or 'rejected'.  _id means 'request id'.
         Others have sent you requests, accept or reject them . */
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );

      // i.e, after accepted or rejected connection request. it has to deleted from 'Requests Page'
      dispatch(removeRequest(_id)); // Dispatch an action - remove the 'current request' from Requests page
    } catch (err) {
      console.error(err);
    }
  };

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

  // U.I
  if (!requestsArr) {
    // if requests is null. i.e, API call failure or no data
    return;
  }
  if (requestsArr.length === 0) {
    // if requests is empty. i.e, no one sent
    return <h1 className="text-center my-10"> No Requests Found </h1>;
  }

  return (
    <div className="my-10 text-center">
      <h1 className="font-bold text-3xl"> Requests Page </h1>
      <div className="requests-container  mt-8">
        {
          /* using Map, iterate on each request object */
          requestsArr.map((requestObj) => {
            const { _id, firstName, lastName, age, gender, photoUrl, about } =
              requestObj.fromUserId; // Destructing
            return (
              <div
                key={_id}
                className="request-container  flex justify-between items-center  m-4 p-4 bg-base-300 rounded-lg  w-2/3 mx-auto"
              >
                <div className="image-container">
                  <img
                    src={photoUrl}
                    className="w-20 h-20 rounded-full"
                    alt="user photo"
                  />
                </div>
                <div className="content-container  text-left mx-4">
                  <h2 className="font-bold text-xl">
                    {firstName + " " + lastName}
                  </h2>
                  {
                    /* if age and gender value exists. then only show it */
                    age && gender && (
                      <p className="mt-1"> {age + ", " + gender} </p>
                    )
                  }
                  <p className="mt-1">{about}</p>
                </div>
                <div className="buttons-container">
                  {/* DaisyUI button components */}
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => {
                      reviewRequest("accepted", requestObj._id);
                    }}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      reviewRequest("rejected", requestObj._id);
                    }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Requests;
