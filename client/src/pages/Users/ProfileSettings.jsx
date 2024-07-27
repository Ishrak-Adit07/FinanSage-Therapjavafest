/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import EditUserData from "../../sections/user/EditUserData";
import EditUserProfilePic from "../../sections/user/EditUserProfilePic";
import EditUserCredentials from "../../sections/user/EditUserCredentials";

const ProfileSettings = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl bg-gradient-to-r from-blue-400 to-blue-600 text-slate-200 rounded-lg shadow-md text-center py-2 px-10 mt-20 w-1/4">
        Profile Settings
      </h1>

      <EditUserData />
      <EditUserProfilePic />
      <EditUserCredentials />
    </div>
  );
};

export default ProfileSettings;
