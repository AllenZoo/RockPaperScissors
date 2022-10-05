import { createContext, useContext } from "react";
import "../styles/App.css";
import React, { useState } from "react";
import ScoreDisplay from "../score/scoreDisplay";
import BodyDisplay from "./bodyDisplay";

export const AppContext = createContext(null);
function App() {
  const [mode, setMode] = useState("select-phase");
  const [score, setScore] = useState(12);
  const [playerChoice, setPlayerChoice] = useState("none");
  const [computerChoice, setComputerChoice] = useState("none");

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
      }}
    >
      <ScoreDisplay />
      <BodyDisplay />
    </AppContext.Provider>
  );
}

export default App;
