import { useState } from "react";

const FCPostInput = () => {
  const sharePost = () => {
    console.log(post);
    setPost("");
  };
  const userName = "Luna";
  const [post, setPost] = useState("");
  return (
    <div className="flex flex-wrap items-center justify-center my-10">
      <input
        type="text"
        placeholder={`What's on your mind, ${userName}?`}
        className="xinput text-slate-700 w-1/2"
        autoFocus
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <button className="chbtn" onClick={sharePost}>
        Share
      </button>
    </div>
  );
};

export default FCPostInput;
