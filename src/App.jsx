import "./App.scss";

import PrivaHeader from "./Components/Header/PrivaHeader";
import PrivaFooter from "./Components/Footer/PrivaFooter";
import PrivaMain from "./Components/PrivaMain/PrivaMain";
import PrivaRegistrationLogin from "./Components/PrivaRegistrationLogin/PrivaRegistrationLogin";
import PrivaLogin from "./Components/PrivaLogin/PrivaLogin";
import PrivaFormRegistration from "./Components/PrivaFormRegistration/PrivaFormRegistration";

import PrivaConnectionFailed from "./Components/PrivaPopups/PrivaConnectionFailed/PrivaConnectionFailed";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="mainApp">
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
      </Routes>
      <PrivaFooter />
      <div class="aurora"></div>
    </div>
  );
};

export default App;
