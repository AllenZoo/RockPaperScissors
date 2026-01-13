import WeaponIcon from "./components/weaponIcon";
import "../../styles/selector.css";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function WeaponSelector() {
  const { setPlayerChoice, setMode, setQuestionAnswer } =
    useContext(AppContext);
  const [run, setRun] = useState(true);
  let state = "select-phase";

  const selectWeapon = (weapon) => {
    setPlayerChoice(weapon); // Store weapon choice in context
    setMode("battle-phase");
  };

  // useEffect(() => {
  //   setPlayerChoice(selectedWeapon);
  //   setMode(state);
  //   console.log("Set mode to " + state);
  // }, []);

  return (
    <div>
      <div className="selector-container">
        <div className="top-row">
          <button
            className="icon-button"
            onClick={function () {
              selectWeapon("paper");
            }}
          >
            <WeaponIcon iconType="paper"></WeaponIcon>
          </button>
          <button
            className="icon-button"
            onClick={function () {
              selectWeapon("scissors");
            }}
          >
            <WeaponIcon iconType="scissors"></WeaponIcon>
          </button>
        </div>

        <div className="bottom-row">
          <button
            className="icon-button"
            onClick={function () {
              selectWeapon("rock");
            }}
          >
            <WeaponIcon iconType="rock"></WeaponIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeaponSelector;
