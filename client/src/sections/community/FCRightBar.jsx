import Advertisement from "./Advertisement";
import Event from "./Event";
import FCFriendList from "./FCFriendList";
import FCRequestAccept from "./FCRequestAccept";

const FCRightBar = () => {
  return (
    <div className="rounded-lg shadow-md p-2 my-2 h-screen overflow-y-auto scrollbar-hidden fixed z-10 pb-20">
      <Advertisement />
      <Event />
      <FCRequestAccept />
      <FCFriendList />
    </div>
  );
};

export default FCRightBar;
