import { useState, useEffect } from "react";
import CloseIco from "./close.svg";
import { Link } from "react-router-dom";

import "./PrivaSettings.scss";

const PrivaSettings = (props) => {
  //*----------> State of Brightness

  const [brightness, setBrightness] = useState(() => {
    const storedBrightness = localStorage.getItem("brightness");
    return storedBrightness !== null ? parseInt(storedBrightness) : 100;
  });

  function handleBrightnessChange(event) {
    const newBrightness = event.target.value;
    setBrightness(newBrightness);
    localStorage.setItem("brightness", newBrightness);
    props.onBrightnessChange(newBrightness);
  }

  useEffect(() => {
    const storedBrightness = localStorage.getItem("brightness");
    if (storedBrightness !== null) {
      setBrightness(parseInt(storedBrightness));
    }
  }, []);
  /*
  //*----------> State of Volume
  const [volume, setVolume] = useState(100);

  function handleVolumeChange(event) {
    const newVolume = event.target.value;
    setVolume(newVolume);
    props.onVolumeChange(newVolume);
  }
*/
  return (
    <div className="privaMainDiv">
      <div className="settings-container">
        <h2>Settings</h2>
        <Link to="../Priva-React-Team/">
          <img src={CloseIco}></img>
        </Link>
        <div className="settings">
          <label>Brightness:</label>
          <input
            type="range"
            id="brightnessSlider"
            min="25"
            max="100"
            value={brightness}
            onChange={handleBrightnessChange}
          />
        </div>
        <div className="settings">
          <label>Volume: (in Dev)</label>
          <input
            type="range"
            id="volumeSlider"
            min="0"
            max="100"
            /*
            value={volume}
            onChange={handleVolumeChange}
            */
          />
        </div>
      </div>
    </div>
  );
};

export default PrivaSettings;
