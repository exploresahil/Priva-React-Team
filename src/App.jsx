import "./App.scss";

import PrivaHeader from "./Components/Header/PrivaHeader";
import PrivaFooter from "./Components/Footer/PrivaFooter";
import PrivaMain from "./Components/PrivaMain/PrivaMain";
import PrivaRegistrationLogin from "./Components/PrivaRegistrationLogin/PrivaRegistrationLogin";
import PrivaLogin from "./Components/PrivaLogin/PrivaLogin";
import PrivaFormRegistration from "./Components/PrivaFormRegistration/PrivaFormRegistration";

import PrivaConnectionFailed from "./Components/PrivaPopups/PrivaConnectionFailed/PrivaConnectionFailed";
import PrivaChargerConnected from "./Components/PrivaPopups/PrivaChargerConnected/PrivaChargerConnected";

import PrivaSettings from "./Components/PrivaSettings/PrivaSettings";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [brightness, setBrightness] = useState(100);
  /*
  const [volume, setVolume] = useState(50);
*/

  function handleBrightnessChange(newBrightness) {
    setBrightness(newBrightness);
  }

  useEffect(() => {
    const brightnessContainer = document.getElementById("brightnessContainer");
    if (brightnessContainer) {
      brightnessContainer.style.filter = `brightness(${brightness}%)`;
    }
  }, [brightness]);
  /*
  function handleVolumeChange(newVolume) {
    setVolume(newVolume);
    // Update app volume here
  }
*/
  return (
    <div className="mainApp" id="brightnessContainer">
      <PrivaHeader />
      <Routes>
        <Route path="/Priva-React-Team/" element={<PrivaMain />} />
        <Route
          path="/Priva-React-Team/PrivaRegistrationLogin"
          element={<PrivaRegistrationLogin />}
        />
        <Route path="/Priva-React-Team/PrivaLogin" element={<PrivaLogin />} />

        <Route
          path="/Priva-React-Team/PrivaFormRegistration"
          element={<PrivaFormRegistration />}
        />
        <Route
          path="/Priva-React-Team/PrivaConnectionFailed"
          element={<PrivaConnectionFailed />}
        />
        <Route
          path="/Priva-React-Team/PrivaChargerConnected"
          element={<PrivaChargerConnected />}
        />
        <Route
          path="/Priva-React-Team/PrivaSettings"
          element={
            <PrivaSettings
              onBrightnessChange={handleBrightnessChange}
              /*
              onVolumeChange={handleVolumeChange}
              */
            />
          }
        />
      </Routes>
      <PrivaFooter />
      <div class="aurora"></div>
    </div>
  );
};

export default App;
