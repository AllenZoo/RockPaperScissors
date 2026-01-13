import { createContext, useContext } from "react";
import "../styles/App.css";
import React, { useState } from "react";
import ScoreDisplay from "../score/scoreDisplay";
import BodyDisplay from "./bodyDisplay";

export const AppContext = createContext(null);
function App() {
  const [mode, setMode] = useState("question-phase");
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("none");
  const [computerChoice, setComputerChoice] = useState("none");
  const [questionAnswer, setQuestionAnswer] = useState(null);
  const [sessionData, setSessionData] = useState([]);
  const [roundNumber, setRoundNumber] = useState(0);
  const [lastPlayerMove, setLastPlayerMove] = useState(null);
  const [lastAiMove, setLastAiMove] = useState(null);
  const [lastOutcome, setLastOutcome] = useState(null);

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        score,
        setScore,
        playerChoice,
        setPlayerChoice,
        computerChoice,
        setComputerChoice,
        questionAnswer,
        setQuestionAnswer,
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
      }}
    >
      <ScoreDisplay />
      <BodyDisplay />
    </AppContext.Provider>
  );
}

export default App;
