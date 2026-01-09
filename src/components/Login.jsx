import { useState } from "react";
import axios from "axios"; // Axios library for making Http Requests

const Login = () => {
  // local state variables
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  // event handler
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
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
      console.log("Api call success. data: ", res);
    } catch (err) {
      console.log("my custom error here:");
      console.error(err);
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
