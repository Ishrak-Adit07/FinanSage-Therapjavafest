import { useAnimate } from "framer-motion";

const FCLeftBar = () => {

    const navigate = useAnimate();

    const goToFinanSage = () =>{
        navigate("/user/dashboard");
    }

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg shadow-md p-2 my-2">
      <h1 className="text-bold text-slate-700 text-left text-xl">This is Financom Left Bar</h1>

      <div className="my-6">
        <button className="leftBarBtn" onClick={goToFinanSage}>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}>FinanSage</button>
        <button className="leftBarBtn" onClick={goToFinanSage}>FinanSage</button>
      </div>
    </div>
  );
}

export default FCLeftBar;
