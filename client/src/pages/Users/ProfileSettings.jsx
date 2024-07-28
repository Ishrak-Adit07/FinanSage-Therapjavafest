/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import EditUserData from "../../sections/user/EditUserData";
import EditUserCredentials from "../../sections/user/EditUserCredentials";
import EditUserImage from "../../sections/user/EditUserImage";
import EditUserIdentfications from "../../sections/user/EditUserIdentifications";

const ProfileSettings = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl bg-gradient-to-r from-blue-400 to-blue-600 text-slate-200 rounded-lg shadow-md text-center py-2 px-10 mt-20 w-1/4">
        Profile Settings
      </h1>

      <EditUserData />
      <EditUserIdentfications />
      <EditUserImage />
      <EditUserCredentials />
    </div>
  );
};

export default ProfileSettings;
