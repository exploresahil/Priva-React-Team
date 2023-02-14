import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivaConnectionFailed = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(function () {
      navigate("../../");
    }, 2000);
  }, []);

  return <div>Connection Failed</div>;
};

export default PrivaConnectionFailed;
