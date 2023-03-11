import React, { useState } from "react";

import "./PrivaChargeStatus.scss";

const PrivaChargeStatus = () => {
  const [button1Color, setButton1Color] = useState("blue");
  const [button2Color, setButton2Color] = useState("red");

  const handleButtonClick = (button) => {
    if (button === 1) {
      setButton1Color("white");
      setButton2Color("red");
    } else {
      setButton1Color("blue");
      setButton2Color("white");
    }
  };

  return (
    <div className="privaMainDiv">
      <div className="charge-main-container">
        <h2>Current Battery Status: 25%</h2>

        <div className="options select-charge-option">
          <button type="button" className="optionOne selectedOption">
            By %
          </button>
          <button type="button" className="optionOne">
            By ₹
          </button>
        </div>
        <div className="options select-charge-option-select activeOption">
          <button type="button">50 %</button>
          <button type="button">100 %</button>
          <button type="button">Custom</button>
        </div>
        <div className="options select-charge-option-select ">
          <button type="button">50 ₹</button>
          <button type="button">100 ₹</button>
          <button type="button">Custom</button>
        </div>
        <div className="buttonOption">
          <button className="submitOption" type="submit">
            Back
          </button>
          <button className="submitOption" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivaChargeStatus;
