import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";

import { addUser } from "../utils/store/userSlice.js"; // Action from User Slice of Redux Store
import { BASE_URL } from "../utils/constants.js"; // hard coded data

// my components
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      // Browser sends existing 'JWT token' from cookies to the Server during API call.
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      const user = res.data; // {_id:'',firstName:'',lastName:'',emailId:'',password:''}

      dispatch(addUser(user)); // Dispatch an Action - adds User data into Redux store
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // only runs once. after first render

  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Outlet component gets filled with 'Child components' based on route path. */}
      <Footer />
    </div>
  );
};

export default Body;

/*
 Page Reload :-
  when we reload our react app or page.
  everything will refresh whole app, components, Redux Store. except our Cookies.
  so, components are destroyed, re-creates newly, renders.


 Login Process :-
  i) email, password are sent to server.
     server validates credentials and sends "JWT Token"(with set-cookie headers) as response.
  ii) browser automatically saves "JWT Token" in "Cookies".
      note: cookies are not deleted. until we manually delete or time expired.

 User Login on Page Reload process(JWT in Cookies):-
   -> when we reload our page after login. i.e,'JWT' token already saved in Cookies during login.
   -> Browser reloads the page, all react components are destroyed, Redux Store is reset(fresh state).
      everything re-created from scratch.
   -> on App Startup:
      i) we make Authentication API call to get User Profile data.
         Browser automatically attaches our "JWT token" from cookies to the HTTP request.
      ii)Server validates our JWT token,  returns User Profile Data.
      iii)Client updates the Redux store with User data.
*/
