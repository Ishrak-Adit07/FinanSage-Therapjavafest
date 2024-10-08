/* eslint-disable no-unused-vars */
import FCPostForm from "../../components/Forms/FCPostForm";
import FCqaFeed from "./FCqaFeed";

const FCFeed = () => {
  return (
    <div className="rounded-lg shadow-md my-2 p-2">
      <h1 className="text-6xl text-slate-700 text-bold text-center my-4">
        FinanCom
      </h1>
      <h1 className="text-2xl text-slate-700 text-bold text-center my-8">
        Your Own Community for Financial Advisory
      </h1>

      <FCPostForm />

      <div className="text-center">
        <button className="chbtn text-center">Your Posts</button>
      </div>

      <FCqaFeed />
    </div>
  );
};

export default FCFeed;
