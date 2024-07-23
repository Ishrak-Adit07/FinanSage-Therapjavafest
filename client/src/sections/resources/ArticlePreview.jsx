/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ArticlePreview = () => {
  return (
    <div className="flex flex-col items-start justify-start text-left my-20 bg-blue-100 p-10 rounded-lg">
      <Link to="/user/articles" title="Articles">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-4xl text-left text-slate-500 text-bold my-20">
            Economic Articles
          </h1>

          <h1 className="text-2xl text-left text-slate-500 text-semibold">
            Read latest articles to improves your knowledge and expertise
          </h1>
          <p className="text-slate-500 text-center mt-4">
            <Link to="/user/articles" title="Articles">
              <span className="underline">Read All</span>
            </Link>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ArticlePreview;
