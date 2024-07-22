/* eslint-disable react/prop-types */

const AdvertisementCard = ({ name, catchPhrase }) => {
  return (
    <div className="p-4 m-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg shadow-md">
      <h1 className="text-xl text-slate-200 text-center text-semibold">{name}</h1>
      <p className="text-sm text-slate-700 text-center">{catchPhrase}</p>
    </div>
  );
};

export default AdvertisementCard;
