/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`w-24 h-12 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isToggled ? 'bg-green-500' : 'bg-gray-300'}`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-10 h-10 rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? 'translate-x-12' : 'translate-x-0'}`}
      />
      <div className="absolute w-full text-center text-white font-semibold">
        {isToggled ? 'ON' : 'OFF'}
      </div>
    </div>
  );
};

export default ToggleButton;