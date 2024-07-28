import Advertisement from "./Advertisement";
import Event from "./Event";
import FCFriendList from "./FCFriendList";
import FCRequestAccept from "./FCRequestAccept";

const FCRightBar = () => {
  return (
    <div className="rounded-lg shadow-md p-2 my-2 h-screen overflow-y-auto scrollbar-hidden fixed z-10 pb-20">
      <Advertisement />
      <div className="w-full my-10">
        <Event />
      </div>
      <div className="w-full my-10">
        <FCRequestAccept />
      </div>
      <div className="w-full my-10">
        <FCFriendList />
      </div>
    </div>
  );
};

export default FCRightBar;
