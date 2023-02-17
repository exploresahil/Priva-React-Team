import { Link } from "react-router-dom";

import "./PrivaFooter.scss";

const PrivaFooter = () => {
  //*----------> Footer Component

  return (
    <div className="footer">
      <div className="settings">
        <Link to="../Priva-React-Team/">
          <button className="footer_btn help_btn">Help</button>
        </Link>
        <Link to="/Priva-React-Team/PrivaSettings">
          <button className="footer_btn home_btn">Settings</button>
        </Link>
      </div>
      <p>Made with Love in India</p>
      <Link to="/Priva-React-Team/PrivaConnectionFailed">
        <button className="footer_btn not_compatible_btn">
          'IF NOT COMPATIBLE'
        </button>
      </Link>
      <Link to="../Priva-React-Team/PrivaChargerConnected">
        <button className="footer_btn pluggedIn_btn">'IF PLUGED IN'</button>
      </Link>
      <div className="language-home">
        <button className="footer_btn language_btn">Language</button>
        <Link to="../Priva-React-Team/">
          <button className="footer_btn home_btn">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PrivaFooter;
