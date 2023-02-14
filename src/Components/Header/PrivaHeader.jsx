import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./PrivaHeader.scss";

import privaLogo from "./privaLogo.svg";

const PrivaHeader = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header">
      <Link to="./">
        <img src={privaLogo} alt="Priva Logo" />
      </Link>
      <div className="brand-full-name">
        <p>Priva Technologies pvt. Ltd.</p>
      </div>
      <div>
        <div>{date.toLocaleDateString()}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default PrivaHeader;
