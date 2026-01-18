// UserCard Component.   n user cards are shown in the 'Feed' component.

import { useDispatch } from "react-redux";
import axios from "axios";

// my components
import { BASE_URL } from "../utils/constants.js";
import { removeUserFromFeed } from "../utils/store/feedSlice.js"; // Action from Feed Slice of Redux store

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, about, skills, age, gender } =
    user;

  const dispatch = useDispatch();

  // Event handler
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(userId)); // Dispatch an action - remove the user from feed
    } catch (err) {
      console.error(err);
    }
  };

  // DaisyUI component - Card
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src={
            user.photoUrl ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {
          // if age and gender value exists. then, only render.
          age && gender && <p>{age + ", " + gender}</p>
        }
        <p>{about || "about me no data ..."}</p>
        <div className="card-actions justify-center  my-4">
          <button
            className="btn btn-secondary"
            onClick={() => {
              handleSendRequest("interested", _id);
            }}
          >
            Interested
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleSendRequest("ignored", _id);
            }}
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
