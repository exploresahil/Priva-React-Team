import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";

import "./PrivaMain.scss";

const PrivaMain = () => {
  useEffect(() => {
    const readyOne = new SplitType(".ready", {
      types: "chars",
      charClass: "readyOneChar",
    });

    gsap.from(readyOne.chars, {
      y: -500,
      opacity: 0,
      duration: 0.3,
      delay: 0.5,
      repeatDelay: 2,
      stagger: { amount: 0.3 },
      ease: "Power1.easeOut",
      repeat: -1,
    });

    gsap.to(readyOne.chars, {
      y: 500,
      opacity: 0,
      duration: 0.3,
      delay: 2.5,
      stagger: { amount: 0.3 },
      ease: "Power1.easeOut",
      repeat: -1,
      repeatDelay: 2,
    });

    const readyTwo = new SplitType(".ready-after", {
      types: "chars",
      charClass: "readyTwoChar",
    });

    gsap.from(readyTwo.chars, {
      y: -500,
      opacity: 0,
      duration: 0.3,

      repeatDelay: 2,
      stagger: { amount: 0.3 },
      ease: "Power1.easeOut",
      repeat: -1,
    });

    gsap.to(readyTwo.chars, {
      y: 500,
      opacity: 0,
      duration: 0.3,
      delay: 0.5,
      stagger: { amount: 0.3 },
      ease: "Power1.easeOut",
      repeat: -1,
      repeatDelay: 2,
    });
  }, []);

  return (
    <div className="privaMain">
      <h3>Hello, I am</h3>
      <div className="ready__container">
        <h2 className="ready">Ready</h2>
        <h2 className="ready-after">Ready</h2>
      </div>
      <h3>To Charge your Vehicle</h3>
      <p>please plug in the charger</p>
    </div>
  );
};

export default PrivaMain;
