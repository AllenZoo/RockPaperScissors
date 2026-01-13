import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import SelectionDisplay from "./components/selectionDisplay";
import WinnerDisplay from "./components/winnerDisplay";
import "../../styles/result-display.css";
import { AI_NAME } from "@/constants";
import { createRound } from "../../state/roundSchema";
import { recordRound } from "../../state/recorder";

function ResultDisplay() {
  const {
    playerChoice,
    computerChoice,
    setMode,
    setPlayerChoice,
    setComputerChoice,
    score,
    setScore,
    questionAnswer,
    sessionData,
    setSessionData,
    roundNumber,
    setRoundNumber,
    lastPlayerMove,
    setLastPlayerMove,
    lastAiMove,
    setLastAiMove,
    lastOutcome,
    setLastOutcome,
  } = useContext(AppContext);
  const [result, setResult] = useState("none");

  const getResult = () => {
    // console.log("Get result");
    let outcome = "DRAW";

    if (playerChoice === computerChoice) {
      setResult("DRAW");
      outcome = "DRAW";
    } else if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        setResult("YOU WIN");
        setScore(score + 1);
        outcome = "WIN";
      } else if (computerChoice === "paper") {
        setResult("YOU LOSE");
        setScore(score - 1);
        outcome = "LOSE";
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        setResult("YOU WIN");
        setScore(score + 1);
        outcome = "WIN";
      } else if (computerChoice === "scissors") {
        setResult("YOU LOSE");
        setScore(score - 1);
        outcome = "LOSE";
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        setResult("YOU WIN");
        setScore(score + 1);
        outcome = "WIN";
      } else if (computerChoice === "rock") {
        setResult("YOU LOSE");
        setScore(score - 1);
        outcome = "LOSE";
      }
    }

    // Record the round data
    const newRound = roundNumber + 1;
    const roundData = createRound({
      round: newRound,
      player_last_move: lastPlayerMove,
      ai_last_move: lastAiMove,
      question_id: questionAnswer?.questionId || null,
      answer:
        questionAnswer?.answer === true
          ? "yes"
          : questionAnswer?.answer === false
          ? "no"
          : null,
      outcome: lastOutcome,
      actual_player_move: playerChoice,
    });

    // Update session data
    const updatedSessionData = [...sessionData, roundData];
    setSessionData(updatedSessionData);
    recordRound(roundData);

    // Update tracking variables for next round
    setRoundNumber(newRound);
    setLastPlayerMove(playerChoice);
    setLastAiMove(computerChoice);
    setLastOutcome(outcome);

    return;
  };

  const resetState = () => {
    setResult("none");
    setPlayerChoice("none");
    setComputerChoice("none");
    setMode("question-phase");
    // setMode("select-phase");
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
        <SelectionDisplay icon={computerChoice} selector={AI_NAME} />
      </div>
      <div style={{ display: result === "DRAW" ? "block" : "none" }}>
        <SelectionDisplay icon={computerChoice} selector={AI_NAME} />
      </div>
      <div style={{ display: result === "YOU LOSE" ? "block" : "none" }}>
        <WinnerDisplay icon={computerChoice} selector={AI_NAME} />
      </div>
    </div>
  );
}

export default ResultDisplay;
