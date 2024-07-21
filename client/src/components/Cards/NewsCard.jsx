/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NewsCard = ({ id, title, preview, link }) => {
  return (
    <div>
      <div className="card rounded-lg shadow-md m-2">
        <div>
          <p className="text-2xl text-slate-700 text-bold text-center">
            {title}
          </p>
          <p className="text-slate-700 text-semibold text-center">{preview}</p>
          <h1 className="text-center">
            <a
              href={link}
              title="Full News"
              className="text-green-500 text-center hover:text-green-700 underline"
            >
              See full news
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
