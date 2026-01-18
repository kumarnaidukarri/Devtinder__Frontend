// Feed component
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { BASE_URL } from "../utils/constants"; // hard coded url
import { addFeed } from "../utils/store/feedSlice"; // Actions from redux

// my components
import UserCard from "./UserCard.jsx";

const Feed = () => {
  const feed = useSelector((appStore) => {
    return appStore.feed;
  }); // Subscribing to 'Feed Slice' of Redux Store
  const dispatch = useDispatch();

  // Async func to get data
  const getFeedData = async () => {
    if (feed) {
      // if feed data already exists in Redux store. Don't Make API call to get Feed Data.
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      }); // API call
      const feedData = res.data.data;
      dispatch(addFeed(feedData)); // Dispatch an action - stores feed data in redux
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeedData();
  }, []);

  if (!feed) {
    // Guard clause - if feed data is empty or null.
    return;
  }

  if (feed.length <= 0) {
    //  if feed is empty.
    return (
      <h1 className="text-center mt-4">No Feed data - no new users found !</h1>
    );
  }

  return (
    <div className="feed-container  flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
