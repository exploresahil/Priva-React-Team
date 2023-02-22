import { useState } from "react";

import "./PrivaCharging.scss";

const PrivaCharging = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const dialStyle = {
    transform: `rotate(${(value / 100) * 180}deg)`,
  };

  return (
    <div className="dial privaMainDiv">
      <div className="dial__container">
        <h1>Charging</h1>
        <div className="dial__circle" id="circle">
          <div className="dial__needle" style={dialStyle}></div>
          <div className="dial__dot"></div>
        </div>
        <h2>{value}%</h2>
        <input
          id="chargingSlider"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PrivaCharging;
