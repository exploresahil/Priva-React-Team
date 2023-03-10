import { useState } from "react";

import "./PrivaChargeStatus.scss";

const PrivaChargeStatus = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected option: ${selectedOption}`);
    // Call an API or perform any other action with the selected option
  };

  return (
    <div className="privaMainDiv">
      <div className="charge-main-container">
        <h2>Current Battery Status: 25%</h2>
        <form onSubmit={handleSubmit}>
          <div className="options select-charge-option">
            <label>
              <input
                type="radio"
                name="options"
                value="Option 1"
                checked={selectedOption === "Option 1"}
                onChange={handleOptionSelect}
              />
              <button
                type="button"
                className={selectedOption === "Option 1" ? "selected" : ""}
                onClick={() => setSelectedOption("Option 1")}
              >
                By %
              </button>
            </label>
            <label>
              <input
                type="radio"
                name="options"
                value="Option 2"
                checked={selectedOption === "Option 2"}
                onChange={handleOptionSelect}
              />
              <button
                type="button"
                className={selectedOption === "Option 2" ? "selected" : ""}
                onClick={() => setSelectedOption("Option 2")}
              >
                By ₹
              </button>
            </label>
            <button type="submit">Submit</button>
          </div>
        </form>

        <div className="options select-charge-option-one">
          <button type="button">50 %</button>
          <button type="button">100 %</button>
          <button type="button">Custom</button>
        </div>
      </div>
    </div>
  );
};

export default PrivaChargeStatus;
