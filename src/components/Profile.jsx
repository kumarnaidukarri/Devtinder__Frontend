import { useSelector } from "react-redux";

// my components
import EditProfile from "./EditProfile.jsx";

const Profile = () => {
  const user = useSelector((appStore) => appStore.user); // Subscribing to "User Slice" of Redux Store(App Store).

  if (!user) {
    // if user is empty/null or not exist.
    return;
  }

  return (
    <div>
      <EditProfile user={user} />
    </div>
  );
};

export default Profile;
