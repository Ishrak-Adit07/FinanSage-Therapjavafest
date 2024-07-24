import { useAnimate } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const FCLeftBar = () => {
  const navigate = useAnimate();

  const { user } = useContext(UserContext);

  const goToFinanSage = () => {
    navigate("/user/dashboard");
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg shadow-md p-4 my-2">
      <div className="bg-slate-200 rounded-lg shadow-md p-2">
        <h1 className="text-bold text-slate-700 text-left text-4xl mt-4 mx-2">
          {user.username}
        </h1>
        <h1 className="text-bold text-slate-700 text-left text-2xl mt-4 mx-2 mb-2">
          {user.name}
        </h1>
      </div>

      <div className="my-6 pb-10">
        <button className="leftBarBtn" onClick={goToFinanSage}>
          <i className="fa-solid fa-house-chimney mr-2"></i>FinanSage
        </button>
        <button className="leftBarBtn" onClick={goToFinanSage}>
          <i className="fa-solid fa-house-chimney mr-2"></i>FinanSage
        </button>
        <button className="leftBarBtn" onClick={goToFinanSage}>
          <i className="fa-solid fa-house-chimney mr-2"></i>FinanSage
        </button>
      </div>
    </div>
  );
};

export default FCLeftBar;
