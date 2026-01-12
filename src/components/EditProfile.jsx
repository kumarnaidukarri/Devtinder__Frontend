// 'EditProfile' component is used in 'Profile' Component.

import { useState } from "react";

// my components
import UserCard from "./UserCard.jsx";

const EditProfile = ({ user }) => {
  // local state variables
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user?.age || 20);
  const [gender, setGender] = useState(user?.gender || "male");
  const [about, setAbout] = useState(user.about);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="edit-profile-container  flex justify-center flex-wrap my-10">
      <div className="card-container  flex justify-center mx-10">
        {/* DaisyUI component - Card with no image */}
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center"> Edit Profile </h2>
            <div>
              {/* daisyui components - Input with fieldset and legend */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend"> First Name: </legend>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="fieldset mt-2">
                <legend className="fieldset-legend"> Last Name: </legend>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="fieldset mt-2">
                <legend className="fieldset-legend"> Photo Url: </legend>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  value={photoUrl}
                  onChange={(event) => {
                    setPhotoUrl(event.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="fieldset mt-2">
                <legend className="fieldset-legend"> Age: </legend>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  value={age}
                  onChange={(event) => {
                    setAge(event.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="fieldset mt-2">
                <legend className="fieldset-legend"> Gender: </legend>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  value={gender}
                  onChange={(event) => {
                    setGender(event.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="fieldset mt-2">
                <legend className="fieldset-legend"> About: </legend>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  value={about}
                  onChange={(event) => {
                    setAbout(event.target.value);
                  }}
                />
              </fieldset>
            </div>
            <p className="error-message  text-red-500">{errorMessage}</p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary">Save Profile</button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
    </div>
  );
};

export default EditProfile;
