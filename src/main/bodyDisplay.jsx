import React, { useContext, useState } from "react";
import WeaponSelector from "./game/WeaponSelector";
import ".././styles/body.css";
import RulesPage from "../rules/rulesPage";
import BattleDisplay from "./game/battleDisplay";
import { AppContext } from "./App";
import ResultDisplay from "./game/resultDisplay";

function BodyDisplay() {
  const { mode } = useContext(AppContext);
  const [showModal, toggleModal] = useState(false);

  const toggleDisplay = () => {
    toggleModal(!showModal);
  };

  return (
    <div>
      <div className="body-display">
        {/* */}
        <div style={{ display: mode == "select-phase" ? "block" : "none" }}>
          <WeaponSelector />
        </div>

        <div style={{ display: mode == "battle-phase" ? "block" : "none" }}>
          <BattleDisplay />
        </div>

        <div style={{ display: mode == "result-phase" ? "block" : "none" }}>
          <ResultDisplay />
        </div>
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
