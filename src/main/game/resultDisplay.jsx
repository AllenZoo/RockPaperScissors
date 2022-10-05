import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import SelectionDisplay from "./components/selectionDisplay";
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
    console.log("Get result");

    if (playerChoice === computerChoice) {
      setResult("DRAW");
      return result;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        setResult("YOU WIN");
      } else if (computerChoice === "paper") {
        setResult("YOU LOSE");
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        setResult("YOU WIN");
      } else if (computerChoice === "scissors") {
        setResult("YOU LOSE");
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        setResult("YOU WIN");
      } else if (computerChoice === "rock") {
        setResult("YOU LOSE");
      }
    }

    return result;
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
      console.log(result);
    }
  });

  // useEffect(() => {
  //   getResult();
  // }, []);

  return (
    <div className="result-display-container">
      <SelectionDisplay icon={playerChoice} selector="YOU" />
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
      <div>
        <SelectionDisplay icon={computerChoice} selector="THE HOUSE" />
      </div>
    </div>
  );
}

export default ResultDisplay;
