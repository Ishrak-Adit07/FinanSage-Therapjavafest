/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FCqaAnswerInput = ({ handleShareAnswer }) => {
  const navigate = useNavigate();

  const shareAnswer = () => {
    console.log(answer);
    const newAnswer = {
        username: "ishrak.adit07",
        answer
    }
    handleShareAnswer(newAnswer);
    setAnswer("");
    navigate("/user/financom");
  };

  const [answer, setAnswer] = useState("");
  return (
    <div className="flex flex-wrap items-center justify-start">
      <input
        type="text"
        placeholder="Answer to this thread"
        className="border-blue-400 border rounded-lg shadow-md w-1/2 p-2 mr-4"
        autoFocus
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button className="chbtn" onClick={shareAnswer}>
        Share Answer
      </button>
    </div>
  );
};

export default FCqaAnswerInput;
