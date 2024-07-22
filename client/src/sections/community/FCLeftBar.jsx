import { useAnimate } from "framer-motion";

const FCLeftBar = () => {

    const navigate = useAnimate();

    const goToFinanSage = () =>{
        navigate("/user/dashboard");
    }

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg shadow-md p-2 my-2 fixed z-10 w-1/5">
      <h1 className="text-bold text-slate-700 text-left text-2xl mt-10 mx-2">Financom Username</h1>

      <div className="my-6 pb-40">
        <button className="leftBarBtn" onClick={goToFinanSage}><i className="fa-solid fa-house-chimney mr-2"></i>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}><i className="fa-solid fa-house-chimney mr-2"></i>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}><i className="fa-solid fa-house-chimney mr-2"></i>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}><i className="fa-solid fa-house-chimney mr-2"></i>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}><i className="fa-solid fa-house-chimney mr-2"></i>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}><i className="fa-solid fa-house-chimney mr-2"></i>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}><i className="fa-solid fa-house-chimney mr-2"></i>FinanSage</button>
      </div>
    </div>
  );
}

export default FCLeftBar;
