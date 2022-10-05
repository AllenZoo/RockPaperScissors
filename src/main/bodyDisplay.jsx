import React, { useContext, useState } from "react";
import WeaponSelector from "./game/WeaponSelector";
import ".././styles/body.css";
import RulesPage from "../rules/ruleDisplay.jsx/rulesPage";

function BodyDisplay() {
  //const { mode } = useContext(AppContext);
  const [showModal, toggleModal] = useState(false);

  const toggleDisplay = () => {
    toggleModal(!showModal);
  };

  return (
    <div>
      <div className="body-display">
        <WeaponSelector />
      </div>
      <div style={{ display: showModal ? "block" : "none" }}>
        <RulesPage toggleDisplay={toggleDisplay} />
      </div>
      <div>
        <button onClick={toggleDisplay} className="rules-button">
          RULES
        </button>
      </div>
    </div>
  );
}

export default BodyDisplay;
