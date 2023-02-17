import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";

import { useNavigate } from "react-router-dom";

import "./PrivaChargerConnected.scss";

const PrivaChargerConnected = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const chargerConnected = new SplitType(".chargerConnected", {
      types: "lines",
      lineClass: "readyOneChar",
    });

    gsap.from(chargerConnected.lines, {
      y: 50,
      opacity: 0,
      duration: 0.1,
      stagger: { amount: 0.1 },
      ease: "Power1.easeOut",
    });

    gsap.to(chargerConnected.lines, {
      y: -50,
      opacity: 0,
      delay: 1,
      duration: 0.1,
      stagger: { amount: 0.1 },
      ease: "Power1.easeOut",
    });

    setTimeout(function () {
      navigate("../../Priva-React-Team/PrivaRegistrationLogin");
    }, 1500);
  }, []);

  return (
    <div className="privaMainDiv">
      <div className="charger-connected-container">
        <h3 className="chargerConnected">Charger Connected</h3>
      </div>
    </div>
  );
};

export default PrivaChargerConnected;
