import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";

import { useNavigate } from "react-router-dom";

import "./PrivaConnectionFailed.scss";

const PrivaConnectionFailed = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const connectionFailed = new SplitType(".connectionFailed", {
      types: "lines",
      lineClass: "readyOneChar",
    });

    gsap.from(connectionFailed.lines, {
      y: 50,
      opacity: 0,
      duration: 0.1,
      stagger: { amount: 0.1 },
      ease: "Power1.easeOut",
    });

    gsap.to(connectionFailed.lines, {
      y: -50,
      opacity: 0,
      delay: 1,
      duration: 0.1,
      stagger: { amount: 0.1 },
      ease: "Power1.easeOut",
    });

    setTimeout(function () {
      navigate("../../Priva-React-Team/");
    }, 1500);
  }, []);

  return (
    <div className="privaMainDiv">
      <div className="connection-failed-container">
        <h3 className="connectionFailed">Connection Failed!</h3>
      </div>
    </div>
  );
};

export default PrivaConnectionFailed;
