import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import SelectionDisplay from "./components/selectionDisplay";
import WinnerDisplay from "./components/winnerDisplay";
import "../../styles/result-display.css";

function ResultDisplay() {
  const {
    playerChoice,
    computerChoice,
    setMode,
    setPlayerChoice,
    setComputerChoice,
    score,
    setScore,
  } = useContext(AppContext);
  const [result, setResult] = useState("none");

  const getResult = () => {
    // console.log("Get result");

    if (playerChoice === computerChoice) {
      setResult("DRAW");
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        setResult("YOU WIN");
        setScore(score + 1);
      } else if (computerChoice === "paper") {
        setResult("YOU LOSE");
        setScore(score - 1);
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        setResult("YOU WIN");
        setScore(score + 1);
      } else if (computerChoice === "scissors") {
        setResult("YOU LOSE");
        setScore(score - 1);
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        setResult("YOU WIN");
        setScore(score + 1);
      } else if (computerChoice === "rock") {
        setResult("YOU LOSE");
        setScore(score - 1);
      }
    }

    return;
  };

  const resetState = () => {
    setResult("none");
    setPlayerChoice("none");
    setComputerChoice("none");
    setMode("select-phase");
  };

  useEffect(() => {
    if (
      playerChoice !== "none" &&
      computerChoice !== "none" &&
      result === "none"
    ) {
      getResult();
    }
  }, [playerChoice, computerChoice, result]);

  return (
    <div className="result-display-container">
      <div style={{ display: result === "YOU LOSE" ? "block" : "none" }}>
        <SelectionDisplay icon={playerChoice} selector="YOU" />
      </div>
      <div style={{ display: result === "DRAW" ? "block" : "none" }}>
        <SelectionDisplay icon={playerChoice} selector="YOU" />
      </div>
      <div style={{ display: result === "YOU WIN" ? "block" : "none" }}>
        <WinnerDisplay icon={playerChoice} selector="YOU" />
      </div>

      <div className="result-display">
        <div>{result}</div>
        <button
          onClick={function () {
            resetState();
          }}
        >
          PLAY AGAIN
        </button>
      </div>
      <div style={{ display: result === "YOU WIN" ? "block" : "none" }}>
        <SelectionDisplay icon={computerChoice} selector="THE HOUSE" />
      </div>
      <div style={{ display: result === "DRAW" ? "block" : "none" }}>
        <SelectionDisplay icon={computerChoice} selector="THE HOUSE" />
      </div>
      <div style={{ display: result === "YOU LOSE" ? "block" : "none" }}>
        <WinnerDisplay icon={computerChoice} selector="THE HOUSE" />
      </div>
    </div>
  );
}

export default ResultDisplay;
