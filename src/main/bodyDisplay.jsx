import React, { useContext, useState } from "react";
import WeaponSelector from "./game/WeaponSelector";
import ".././styles/body.css";
import RulesPage from "../rules/ruleDisplay.jsx/rulesPage";

function BodyDisplay() {
  //const { mode } = useContext(AppContext);

  const displayRules = () => {};
  return (
    <div>
      <div className="body-display">
        <WeaponSelector />
      </div>
      <div>
        <RulesPage />
      </div>
      <div>
        <button onClick={displayRules} className="rules-button">
          RULES
        </button>
      </div>
    </div>
  );
}

export default BodyDisplay;
