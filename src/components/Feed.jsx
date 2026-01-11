// Feed component
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { BASE_URL } from "../utils/constants"; // hard coded url
import { addFeed } from "../utils/store/feedSlice"; // Actions from redux

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

  return <div>Feed Page</div>;
};

export default Feed;
