import { useState } from "react";

const Login = () => {
  // local state variables
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  // event handler
  const handleLogin = async () => {
    console.log(
      "Make API call to backend for login(username, password). Backend will give the JWT token in cookies"
    );
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
