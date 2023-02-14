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
        <Route path="/" element={<PrivaMain />} />
        <Route
          path="/PrivaRegistrationLogin"
          element={<PrivaRegistrationLogin />}
        />
        <Route path="/PrivaLogin" element={<PrivaLogin />} />

        <Route
          path="/PrivaFormRegistration"
          element={<PrivaFormRegistration />}
        />
        <Route
          path="/PrivaConnectionFailed"
          element={<PrivaConnectionFailed />}
        />
      </Routes>
      <PrivaFooter />
      <div class="aurora"></div>
    </div>
  );
};

export default App;
