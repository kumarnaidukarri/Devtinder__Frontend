// Connections.jsx component contains 'all connections' of the user.
import { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// my components
import { BASE_URL } from "../utils/constants.js";
import { addConnections } from "../utils/store/connectionsSlice.js"; // Action from 'Connections Slice' of Redux store

const Connections = () => {
  const dispatch = useDispatch();
  const connectionsUsersArr = useSelector((appStore) => appStore.connections); // Subscribes to the 'Connections' Slice of Redux Store
  const userData = useSelector((appStore) => appStore.user); // Subscribes to the 'User' Slice of Redux Store

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

  // U.I
  if (!connectionsUsersArr) {
    // if connections is null. i.e, API call failure or no data
    return;
  }
  if (connectionsUsersArr.length === 0) {
    // if connections is empty. i.e, no one sent
    return <h1 className="text-center mt-4"> No Connections Found </h1>;
  }

  return (
    <div className="my-10 mb-36 text-center">
      <h1 className="font-bold text-3xl"> Connections Page </h1>
      <div className="connections-container  mt-8">
        {connectionsUsersArr.map((connectionUser) => {
          const { _id, firstName, lastName, age, gender, photoUrl, about } =
            connectionUser;
          return (
            <div
              key={_id}
              className="connection-container  flex gap-4 justify-center items-center flex-wrap   m-4 p-4 bg-base-300 rounded-lg mx-auto  w-3/4 md:w-1/2  lg:justify-start"
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
                  /* if age and gender exists. then only show it */
                  age && gender && (
                    <p className="mt-1"> {age + ", " + gender} </p>
                  )
                }
                <p className="mt-1">{about}</p>
              </div>
              {
                /* if user brought 'Premium Membership'. then, only show Chat button. */
                userData.isPremium === true ? (
                  <div className="button-container mx-auto xl:ml-auto xl:mr-12 ">
                    <Link to={"/chat/" + _id}>
                      <button className="btn btn-primary"> Chat </button>
                    </Link>
                  </div>
                ) : null
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
