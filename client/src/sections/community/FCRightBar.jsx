import Advertisement from "./Advertisement";

const FCRightBar = () => {
  return (
    <div className="rounded-lg shadow-md p-2 my-2 fixed z-10 w-1/5">
      <h1 className="m-4 text-left text-2xl text-red-400">Sponsored</h1>
      <Advertisement />
    </div>
  );
};

export default FCRightBar;
