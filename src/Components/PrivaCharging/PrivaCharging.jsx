import { useState } from "react";
import { TbBatteryCharging2 } from "react-icons/tb";

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
    <div className="privaMainDiv">
      <div class="battery">
        <div class="battery__card">
          <div class="battery__data">
            <p class="battery__text">Battery</p>
            <h1 class="battery__percentage">20%</h1>

            <p class="battery__status">
              Low battery
              <TbBatteryCharging2 />
            </p>
          </div>

          <div class="battery__pill">
            <div class="battery__level">
              <div class="battery__liquid"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivaCharging;
