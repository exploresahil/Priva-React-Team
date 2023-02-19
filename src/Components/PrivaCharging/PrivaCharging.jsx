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
      <h2> {value}%</h2>
      <div className="dial__needle" style={dialStyle}></div>
      <input
        id="chargingSlider"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default PrivaCharging;
