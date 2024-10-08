import { useAnimate } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const FCLeftBar = () => {
  const navigate = useAnimate();

  const { user } = useContext(UserContext);

  const goToHome = () => {
    navigate("/");
  };

  const goToDashboard = () => {
    navigate("/user/dashboard");
  };

  const goToProfile = () => {
    navigate("/user/profile");
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg shadow-md p-4 my-2">
      <div className="bg-slate-200 rounded-lg shadow-md p-2 my-4">
        <h1 className="text-bold text-slate-700 text-left text-2xl mt-4 mx-2 mb-2">
          {user.name}
        </h1>
        <h1 className="text-bold text-slate-500 text-left text-2xl mt-4 mx-2">
          @{user.username}
        </h1>
      </div>

      <div className="my-6 pb-10">
        <button className="leftBarBtn" onClick={goToHome}>
          <i className="fa-solid fa-house-chimney mr-2"></i>Home
        </button>
        <button className="leftBarBtn" onClick={goToProfile}>
          <i className="fa-solid fa-house-chimney mr-2"></i>Profile
        </button>
        <button className="leftBarBtn" onClick={goToDashboard}>
          <i className="fa-solid fa-house-chimney mr-2"></i>Dashboard
        </button>
      </div>
    </div>
  );
};

export default FCLeftBar;
