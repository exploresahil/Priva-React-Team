import React, { useState } from "react";

import "./PrivaCharging.scss";

const PrivaCharging = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const startingTime = "02:30:00"; // set the starting time here
  const [power, setPower] = useState(0); // initial power delivered is 0

  const handleChange = (event) => {
    const inputVal = event.target.value;
    const maxPower = 500; // set maximum power delivered

    setRangeValue(inputVal);
    setPower((inputVal / 100) * maxPower);
  };

  // convert starting time to seconds
  const startingTimeInSeconds = startingTime
    .split(":")
    .reduce((acc, val, index) => acc + val * Math.pow(60, 2 - index), 0);

  // convert progress from percentage to seconds
  const remainingSeconds = Math.round(
    ((100 - rangeValue) * startingTimeInSeconds) / 100
  );

  // calculate remaining hours, minutes, and seconds
  const remainingHours = Math.floor(remainingSeconds / 3600);
  const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
  const remainingSecondsFormatted = remainingSeconds % 60;

  // format the remaining time as "hh:mm:ss"
  const remainingTime = `${remainingHours
    .toString()
    .padStart(2, "0")}:${remainingMinutes
    .toString()
    .padStart(2, "0")}:${remainingSecondsFormatted
    .toString()
    .padStart(2, "0")}`;

  const divStyle = {
    width: `${rangeValue}%`,
    backgroundColor: (() => {
      switch (true) {
        case rangeValue < 25:
          return "#ea4335";
        case rangeValue < 50:
          return "#fbbc04";
        case rangeValue < 75:
          return "#4285f4";
        default:
          return "#34a853";
      }
    })(),
  };

  return (
    <div className="privaMainDiv">
      <div className="charging-container">
        <h2 className="percentage">{rangeValue}% Charged</h2>
        <h2 className="remainimg-time">Time Remaining: {remainingTime}</h2>
        <h2 className="power">Power Delivered: {power}kW</h2>
        <div className="battery-visual-plus"></div>
        <div className="battery-container-main">
          <div className="battery-visual"></div>

          <div class="battery-container">
            <div className="battery-level" style={divStyle}></div>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          id="chargingSlider"
          value={rangeValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PrivaCharging;
