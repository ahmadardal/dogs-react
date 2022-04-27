import { useState } from "react";
import "../styles/BaseComponent.css";
import MenuItem from "./MenuItem";

const BaseComponent = ({ headerContent, mainContent, footerContent }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f8f8f8",
        display: "flex",
      }}
    >
      <img
        src={require("../assets/hamburger.png")}
        id="hamburger"
        alt="Menu"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />

      {showMobileMenu ? (
        <div className="mobileMenu">
          <MenuStack />
        </div>
      ) : (
        <div />
      )}

      <div className="Sidebar">
        <MenuStack />
      </div>

      <div className="contentContainer">
        <div className="headContent">{headerContent}</div>

        <div className="mainContent">{mainContent}</div>

        <div className="footerContent">{footerContent}</div>
      </div>
    </div>
  );
};

const MenuStack = () => {
  return (
    <>
      <MenuItem
        title="Hem"
        image={require("../assets/home.png")}
        navigatesTo=""
      />
      <MenuItem
        title="Register"
        image={require("../assets/happy.png")}
        navigatesTo="Register"
      />
    </>
  );
};

export default BaseComponent;
