import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import SelectionDisplay from "./components/selectionDisplay";
import "../../styles/battle-display.css";
import { AI_NAME } from "@/constants";

function BattleDisplay(props) {
  const selector = props.selector;
  const icon = props.icon;
  const { playerChoice, computerChoice, setComputerChoice, setMode } =
    useContext(AppContext);

  useEffect(() => {
    if (playerChoice != "none" && computerChoice == "none") {
      getRandomWeapon();
    }
  });

  async function getRandomWeapon() {
    let min = 0;
    let max = 2;
    let num = Math.round(Math.random() * (max - min) + min);
    console.log("Computer chooses #" + num);

    let wait = await resolveAfter1Second();

    switch (num) {
      case 0:
        setComputerChoice("rock");
        break;
      case 1:
        setComputerChoice("paper");
        break;
      case 2:
        setComputerChoice("scissors");
        break;
    }

    wait = await resolveAfter1Second();
    let state = "result-phase";
    setMode(state);
  }

  function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 2000);
    });
  }

  function resolveAfter1Second() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 1000);
    });
  }

  return (
    <div className="battle-display-container">
      <SelectionDisplay icon={playerChoice} selector="YOU" />
      <SelectionDisplay icon={computerChoice} selector={AI_NAME} />
    </div>
  );
}

export default BattleDisplay;
