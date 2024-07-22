/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import FCqaAnswerInput from "../../sections/community/FCqaAnswerInput";

const FCqaCard = ({ username, question, answers }) => {
  const handleShareAnswer = (newAnswer) => {
    answers.push(newAnswer);
    console.log(answers);
  };

  return (
    <div>
      <div className="card rounded-lg shadow-md m-2">
        <div>
          <p className="text-2xl text-purple-400 text-bold text-left">
            {username}
          </p>

          <p className="text-xl text-purple-400 text-semibold text-left mt-2">
            {question}
          </p>
          {answers.map((answer, index) => (
            <div key={index} className="w-full mt-4">
              <p className="text-xl text-blue-400 text-semibold">
                {answer.username}
              </p>
              <p>{answer.answer}</p>
            </div>
          ))}

          <div className="mt-4">
            <FCqaAnswerInput handleShareAnswer={handleShareAnswer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCqaCard;
