import { createContext, useState, useEffect } from "react";

export const AudioContext = createContext();

export function AudioProvider(props) {
  const [volume, setVolume] = useState(() => {
    return JSON.parse(localStorage.getItem("audioVolume")) || 50;
  });

  useEffect(() => {
    localStorage.setItem("audioVolume", JSON.stringify(volume));
  }, [volume]);

  return (
    <AudioContext.Provider value={{ volume, setVolume }}>
      {props.children}
    </AudioContext.Provider>
  );
}
