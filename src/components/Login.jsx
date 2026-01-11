import { useState } from "react";
import { useDispatch } from "react-redux"; // redux hooks
import { useNavigate } from "react-router"; // react router hooks
import axios from "axios"; // Axios library for making Http Requests

import { addUser } from "../utils/store/userSlice.js"; // Actions from User Slice of Redux Store
import { BASE_URL } from "../utils/constants.js"; // hard coded data

const Login = () => {
  // local state variables
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch(); // useDispatch() hook used to dispatch an Action
  const navigate = useNavigate(); // useNavigate() hook used to Navigate between Paths(routes/pages) in URL programmatically.

  // event handler
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      /* Note:
         Axios config object "{withCredentials:true}" must be used when making HTTP Requests.
         it tells Axios to send Cookies(browser to server) and accept Cookies(sent by server).
      */
      console.log("Api call success. data: ", res.data);

      dispatch(addUser(res.data)); // Dispatches an Action

      navigate("/"); // Navigate to another Path
    } catch (err) {
      setErrorMessage(err?.response?.data || "Something went wrong!"); // update state variable
      console.error("my custom error :- ", err, err?.response?.data);
    }
  };

  return (
    <div className="card-container  flex justify-center my-10">
      {/* DaisyUI component - Card with no image */}
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            {/* daisyui components - Input with fieldset and legend */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Email ID </legend>
              <input
                type="text"
                className="input"
                placeholder=""
                value={emailId}
                onChange={(event) => {
                  setEmailId(event.target.value);
                }}
              />
            </fieldset>
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend"> Password </legend>
              <input
                type="text"
                className="input"
                placeholder=""
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </fieldset>
          </div>
          <p className="error-message  text-red-500">{errorMessage}</p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
