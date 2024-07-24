import Advertisement from "./Advertisement";
import Event from "./Event";
import FCAcceptRequest from "./FCAcceptRequest";

const FCRightBar = () => {
  return (
    <div className="rounded-lg shadow-md p-2 my-2 fixed z-10 w-1/5">
      <Advertisement />
      <Event />
      <FCAcceptRequest />
    </div>
  );
};

export default FCRightBar;
