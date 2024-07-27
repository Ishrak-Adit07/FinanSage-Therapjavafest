/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const FriendShowCard = ({ name, username }) => {
  return (
    <div>
      {
        <div className="p-4 m-4 rounded-lg shadow-md">
          <h1 className="text-xl text-slate-700 text-left text-semibold">
            {name}
          </h1>
          <p className="text-sm text-slate-500 text-left">@{username}</p>
        </div>
      }
    </div>
  );
};

export default FriendShowCard;
