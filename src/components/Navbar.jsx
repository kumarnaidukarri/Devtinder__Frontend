import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux"; // redux hooks

import axios from "axios"; // Axios for http requests instead of Fetch()
import { BASE_URL } from "../utils/constants"; // hard coded url
import { removeUser } from "../utils/store/userSlice"; // Action from redux store

const Navbar = () => {
  const user = useSelector((appStore) => appStore.user); // Subscribes to 'User Slice'(specific portion) of Redux Store.
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // event handler
  const handleLogout = async () => {
    try {
      // Browser automatically attaches Cookies data into HTTP request. since we use 'withCredentials:true'.
      // then, Server will expire this 'JWT token' from Cookies.
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });

      dispatch(removeUser()); // dispatch an action - removes user from redux store

      navigate("/login"); // navigate to Login path
    } catch (err) {
      console.error(err);
    }
  };

  // DaisyUI component - navbar
  return (
    <div className="navbar bg-base-300 shadow-sm" data-theme="forest">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Devtinder
        </Link>
      </div>
      {
        /* Show Profile Image & Profile Menu in Navbar. only if 'User' data present in redux store. i.e, only after User Logged in. */
        user && (
          <div className="flex gap-2">
            <div className="user-name  self-center">
              Welcome, {user.firstName}
            </div>
            <div className="dropdown dropdown-end  flex mx-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      /* "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" */
                      user.photoUrl
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections"> Connections </Link>
                </li>
                <li>
                  <Link to="" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;
